const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/profiles', profileRoutes);

app.get('/', (req, res) => {
    res.send('SmartCardLink Backend API is running.');
});

module.exports = app;
