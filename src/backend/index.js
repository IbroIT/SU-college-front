const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for frontend communication
app.use(cors());
app.use(express.json());

app.post('/search', (req, res) => {
    const { searchTerm, lang } = req.body;

    // Path to translation files
    const localesPath = path.join(__dirname, '../locales', lang, 'translation.json');

    fs.readFile(localesPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading the translation file' });
        }

        const translations = JSON.parse(data);
        const results = [];

        // Search for the entered word in JSON data
        for (const key in translations) {
            const sentence = translations[key];
            if (sentence.includes(searchTerm)) {
                results.push({
                    sentence,
                    key // This key can represent the page or section
                });
            }
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No results found' });
        }

        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
