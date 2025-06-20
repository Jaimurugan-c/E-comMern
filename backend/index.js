// 1️⃣ Importing required packages
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 2️⃣ Setting up the port number
const PORT = 4000;

// 3️⃣ Creating an instance of Express
const app = express();

// 4️⃣ MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/e-com';

// 5️⃣ Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// 6️⃣ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// 7️⃣ Test route
app.get('/', (req, res) => {
  res.send("ellame innme nala tha nadakum patasum summave koluthama vedikum 🚀");
});

// 🔧 Ensure upload/images directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 8️⃣ Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

// 9️⃣ Initialize Multer
const upload = multer({ storage });

// 🔟 Make uploaded images public
app.use('/images', express.static(uploadDir));

// 1️⃣1️⃣ Upload endpoint
app.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    console.log('❌ No file received');
    return res.status(400).json({ success: 0, message: 'No file uploaded' });
  }

  console.log('✅ File uploaded:', req.file.filename);

  res.json({
    success: 1,
    message: 'Image uploaded successfully',
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  });
});


// 1️⃣2️⃣ Schema for Product
const Product = mongoose.model('Product', {
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  new_price: {
    type: Number,
    required: true
  },
  old_price: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  available: {
    type: Boolean,
    default: true
  },
});
//delting product
app.post('/removeproduct', async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id})
  console.log('✅ Product deleted:');
  res.json({
    success: 1,
    name:req.body.name,
  })
})
//for showing frontnrend grtting all products
app.get('/allproducts',async(req,res)=>{
  let products = await Product.find({});
  console.log("all products fethched")
  res.send(products)
})
// 1️⃣3️⃣ Add Product API
app.post('/addproduct', async (req, res) => {
  let products = await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array =products.slice(-1);
    let last_product = last_product_array[0];
    id= last_product.id + 1;
  }else{
    id=1;
  }
  try {
    const newProduct = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await newProduct.save();
    console.log('✅ Product added:', newProduct.name);

    res.json({
      success: 1,
      message: 'Product added successfully',
      product: newProduct,
    });
    console.log('Product added successfully:', newProduct);
  } catch (err) {
    console.error('❌ Error adding product:', err);
    res.status(500).json({ success: 0, message: 'Failed to add product' });
  }
});

//scema creating for user


// 1️⃣4️⃣ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
