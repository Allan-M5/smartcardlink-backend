const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('✅ Admin form route working and live.');
});

module.exports = router;
