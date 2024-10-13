const express = require('express');
const mongoose = require('mongoose');
const Vocaloid = require('./models/Vocaloid');
const app = express();
const port = 3000;

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/vocaloid-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Bien, te conectaste uwu');
}).catch((error) => {
    console.error('Error, no te conectaste u.u', error);
});


app.get('/', (req, res) => {
    res.send('API de VOCALOID funcionandowo');
});


app.post('/vocaloids', async (req, res) => {
    const { nombre, genero, desarrollador, idioma, fechaLanzamiento, versionMotor } = req.body;

    try {
        const nuevoVocaloid = new Vocaloid({
            nombre,
            genero,
            desarrollador,
            idioma,
            fechaLanzamiento,
            versionMotor
        });

        const vocaloidGuardado = await nuevoVocaloid.save();
        res.status(201).json(vocaloidGuardado);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear' });
    }
});


app.get('/vocaloids', async (req, res) => {
    try {
        const vocaloids = await Vocaloid.find();
        res.json(vocaloids);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el elemento solicitado' });
    }
});


app.delete('/vocaloids/:id', async (req, res) => {
    try {
        const vocaloidEliminado = await Vocaloid.findByIdAndDelete(req.params.id);
        if (!vocaloidEliminado) {
            return res.status(404).json({ error: 'Vocaloid no encontrado' });
        }
        res.json({ mensaje: 'Vocaloid eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Vocaloid' });
    }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puertowo ${port}`);
});
