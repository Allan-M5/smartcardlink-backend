// server/server.js

require('dotenv').config();
const app = require('./app');

// Use the PORT provided by Fly.io or fallback to 3000 explicitly
const PORT = process.env.PORT || 3000;

// Confirm the environment and port explicitly on startup
console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🚀 Starting SmartCardLink backend on 0.0.0.0:${PORT}...`);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on 0.0.0.0:${PORT}`);
});

// Optional for debugging uncaught errors
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection:', reason);
    process.exit(1);
});
