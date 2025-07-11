const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('✅ vCard Clients Dashboard route working and live.');
});

module.exports = router;
