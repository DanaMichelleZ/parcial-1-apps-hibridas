const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vocaloid-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Bien, te conectaste a MongoDB');
}).catch((error) => {
    console.error('Error, no te conectaste a MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('API de VOCALOID funcionandowo');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puertowo ${port}`);
});
