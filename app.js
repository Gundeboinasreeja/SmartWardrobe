const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Configure Multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to keep files in memory
const upload = multer({ storage });

// API to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    const category = req.body.category;
    const name = req.body.name;
    const file = req.file;

    if (!category || !name || !file) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Convert file buffer to Base64
    const base64Image = file.buffer.toString('base64');
    const contentType = file.mimetype;

    // Send back the image data as Base64
    res.json({ name, category, contentType, imageData: base64Image });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
