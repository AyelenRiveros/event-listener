const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post('/api/event-listener', (req, res) => {
    console.log('Evento recibido:', req.body);
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor iniciado en el puerto ' + PORT);
});