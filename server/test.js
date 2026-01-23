console.log('Starting full test...');
try {
    const express = require('express');
    console.log('express loaded');
    const path = require('path');
    console.log('path loaded');
    const cors = require('cors');
    console.log('cors loaded');
    require('dotenv').config();
    console.log('dotenv loaded');

    const app = express();
    app.use(cors());
    app.use(express.json());
    console.log('middleware set');

    const staticPath = path.join(__dirname, '../client/dist');
    console.log('Static:', staticPath);
    app.use(express.static(staticPath));
    console.log('static set');

    app.get('*', (req, res) => {
        res.send('ok');
    });

    app.listen(5002, () => console.log('Listening 5002'));
} catch (e) {
    console.error('Error in test:', e);
}
