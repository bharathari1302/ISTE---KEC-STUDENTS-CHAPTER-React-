
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running via Cloud Functions' });
});

// Export the express app as a Cloud Function called 'api'
exports.api = functions.https.onRequest(app);
