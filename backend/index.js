// 1️1 Importing required packages
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 2️2 Setting up the port number
const PORT = 4000;

// 3️3 Creating an instance of Express
const app = express();

// 4️4 MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/e-com';

// 5️5 Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// 6️6 Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// 7 Test route
app.get('/', (req, res) => {
  res.send("ellame innme nala tha nadakum patasum summave koluthama vedikum");
});

// Ensure upload/images directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 8 Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

// 9 Initialize Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Make uploaded images public
app.use('/images', express.static(uploadDir));

// 11 Upload endpoint
app.post('/upload', upload.single('product'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }
    res.json({
      success: 1,
      message: 'Image uploaded successfully',
      image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ success: 0, message: 'Server error during upload' });
  }
});

// 12 Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  category: String,
  new_price: Number,
  old_price: Number,
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});
const Product = mongoose.model('Product', productSchema);

// Delete Product Endpoint
app.post('/removeproduct', async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ id: req.body.id });
    if (!result) return res.status(404).json({ success: 0, message: 'Product not found' });
    res.json({ success: 1, message: 'Product deleted', id: req.body.id });
  } catch (err) {
    res.status(500).json({ success: 0, message: 'Server error during deletion' });
  }
});

// Get All Products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.status(500).json({ success: 0, message: 'Server error fetching products' });
  }
});

// Middleware: fetchUser
const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ success: 0, message: 'Access denied' });
  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).json({ success: 0, message: 'Invalid token' });
  }
};

// New Collections Endpoint
app.get('/newcollections', async (req, res) => {
  const products = await Product.find({});
  const newCollection = products.slice(-8);
  res.send(newCollection);
});

// Popular in Women Endpoint
app.get('/popularinwomen', async (req, res) => {
  const products = await Product.find({ category: "women" });
  const popularInWomen = products.slice(0, 4);
  res.send(popularInWomen);
});

// Cart Endpoints (User Schema required)
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  cartData: { type: Object, default: {} },
  date: { type: Date, default: Date.now }
});
const Users = mongoose.model('Users', userSchema);

app.post('/addtocart', fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  user.cartData[req.body.id] += 1;
  await user.save();
  res.send("added");
});

app.post('/removefromcart', fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  if (user.cartData[req.body.id] > 0) user.cartData[req.body.id] -= 1;
  await user.save();
  res.send("removed");
});

// Add Product
app.post('/addproduct', async (req, res) => {
  try {
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    const newProduct = new Product({
      id: newId,
      ...req.body
    });
    await newProduct.save();
    res.status(201).json({ success: 1, message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ success: 0, message: 'Failed to add product' });
  }
});

// Get Cart
app.post('/getcart', fetchUser, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    res.json(user.cartData);
  } catch (err) {
    res.status(500).json({ success: 0, message: 'Failed to get cart' });
  }
});

// Signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ success: 0, message: 'All fields are required' });
  const existingUser = await Users.findOne({ email });
  if (existingUser) return res.status(400).json({ success: 0, message: 'User already exists' });

  const cartData = {};
  for (let i = 0; i < 300; i++) cartData[i] = 0;

  const user = new Users({ name, email, password, cartData });
  await user.save();

  const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom', { expiresIn: '1h' });
  res.status(201).json({ success: 1, token });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ success: 0, message: 'Invalid credentials' });

  const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom', { expiresIn: '1h' });
  res.json({ success: 1, message: 'Login successful', token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
