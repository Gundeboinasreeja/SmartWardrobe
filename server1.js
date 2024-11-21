require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Ensure you have this model defined

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error signing up user." });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) { // In production use hashed passwords!
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in." });
    }
});

// Start the server on port 5001
const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});