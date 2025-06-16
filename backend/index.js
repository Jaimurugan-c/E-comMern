import express from 'express';


const app = express();



// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'E-comMern backend is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});