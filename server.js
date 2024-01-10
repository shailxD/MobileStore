import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Use bodyParser.json() for JSON parsing
app.use(bodyParser.json());

// Allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/submit', (req, res) => {
    const formData = req.body;

    // Implement database storage logic here (e.g., using MongoDB, MySQL, etc.).

    // For now, just log the data.
    console.log(formData);

    res.status(200).send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
