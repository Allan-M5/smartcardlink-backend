// server/app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const adminFormRoute = require('./routes/adminFormRoute');
const vcardClientsDashboardRoute = require('./routes/vcardClientsDashboardRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/adminform', adminFormRoute);
app.use('/api/vcard_clients_dashboard', vcardClientsDashboardRoute);

// Health check
app.get('/', (req, res) => {
    res.send('✅ SmartCardLink Backend API is running without DB.');
});

module.exports = app;
