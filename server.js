const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('Henlo')
});

const port = 5000 || process.env.port;

app.listen(port, () => `Server running on port ${port}`)

