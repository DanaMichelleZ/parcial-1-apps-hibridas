const express = require('express');
const conectarDB = require('./config/db');
const vocaloidRoutes = require('./routes/vocaloidRoutes');

const app = express();
const port = 3000;


app.use(express.json());


conectarDB();


app.use('/vocaloids', vocaloidRoutes);


app.get('/', (req, res) => {
    res.send('API de VOCALOID funcionando correctamente');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
