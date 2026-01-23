const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const staticPath = path.join(__dirname, '../client/dist');
console.log('Static files path:', staticPath);

app.use(express.static(staticPath));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get(/^(.*)$/, (req, res) => {
    const indexPath = path.join(staticPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error serving index.html:', err.message);
            // Don't crash, just send 500
            if (!res.headersSent) res.status(500).send('Error loading page');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
