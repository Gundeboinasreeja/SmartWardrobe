// Import necessary modules
const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    //useNewUrlParser: true,
   // useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch((err) => {
    console.error('Connection error', err);
});

// Define a Schema for your data
const itemSchema = new mongoose.Schema({
    category: String,
    name: String,
    dateAdded: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

// Configure storage for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// Middleware to serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle file uploads and save information to MongoDB
app.post('/upload', upload.single('file'), async (req, res) => {
    const newItem = new Item({
        category: req.body.category,
        name: req.file.filename
    });
    await newItem.save();
    res.send(`File uploaded and information saved successfully. <a href="/uploads/${req.file.filename}">View Uploaded File</a>`);
});

// Start the server
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
