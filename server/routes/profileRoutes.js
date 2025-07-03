const express = require('express');
const router = express.Router();
const { getProfiles, addProfile } = require('../controllers/profileController');

// GET all profiles
router.get('/', getProfiles);

// POST a new profile
router.post('/', addProfile);

module.exports = router;
