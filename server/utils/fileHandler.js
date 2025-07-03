const fs = require('fs').promises;

// Read JSON data from file
const readData = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data || '[]');
    } catch (error) {
        throw new Error('Error reading data: ' + error.message);
    }
};

// Write JSON data to file
const writeData = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        throw new Error('Error writing data: ' + error.message);
    }
};

module.exports = { readData, writeData };
