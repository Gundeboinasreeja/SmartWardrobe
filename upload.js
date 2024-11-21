// upload.js (Backend in Node.js/Express)
const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');
const path = require('path');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory for storing files
    },
    filename: (req, file, cb) => {
        const uniqueName = `${req.body.category}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
}

// Route to handle file upload
router.post('/', authenticateToken, upload.single('file'), async (req, res) => {
    const { category, name } = req.body;
    const filePath = req.file.path;

    const newItem = new Item({
        category,
        name,
        filename: req.file.filename,
        path: filePath
    });

    await newItem.save();

    // Send metadata back for local storage
    res.json({
        category,
        name,
        filename: req.file.filename,
        path: filePath,
        _id: newItem._id
    });
});

module.exports = router;
