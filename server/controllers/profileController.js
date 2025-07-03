const path = require('path');
const { readData, writeData } = require('../utils/fileHandler');

const dataFilePath = path.join(__dirname, '../data/profiles.json');

// GET all profiles
const getProfiles = async (req, res) => {
    try {
        const profiles = await readData(dataFilePath);
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving profiles', error: error.message });
    }
};

// POST add a new profile
const addProfile = async (req, res) => {
    try {
        const profiles = await readData(dataFilePath);
        const newProfile = req.body;
        profiles.push(newProfile);
        await writeData(dataFilePath, profiles);
        res.status(201).json({ message: 'Profile added successfully', profile: newProfile });
    } catch (error) {
        res.status(500).json({ message: 'Error adding profile', error: error.message });
    }
};

module.exports = { getProfiles, addProfile };
