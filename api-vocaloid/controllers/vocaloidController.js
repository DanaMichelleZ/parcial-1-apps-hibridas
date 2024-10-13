const Vocaloid = require('../models/Vocaloid');

const crearVocaloid = async (req, res) => {
    const { nombre, genero, desarrollador, idioma, fechaLanzamiento, versionMotor, imagenPerfil, imagenCuerpoCompleto } = req.body;

    try {
        const nuevoVocaloid = new Vocaloid({
            nombre,
            genero,
            desarrollador,
            idioma,
            fechaLanzamiento,
            versionMotor,
            imagenPerfil,
            imagenCuerpoCompleto
        });

        const vocaloidGuardado = await nuevoVocaloid.save();
        res.status(201).json(vocaloidGuardado);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el Vocaloid' });
    }
};


const obtenerVocaloids = async (req, res) => {
    try {
        const vocaloids = await Vocaloid.find();
        res.json(vocaloids);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Vocaloids' });
    }
};


const obtenerVocaloidPorId = async (req, res) => {
    try {
        const vocaloid = await Vocaloid.findById(req.params.id);
        if (!vocaloid) {
            return res.status(404).json({ error: 'Vocaloid no encontrado' });
        }
        res.json(vocaloid);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Vocaloid' });
    }
};


const eliminarVocaloid = async (req, res) => {
    try {
        const vocaloidEliminado = await Vocaloid.findByIdAndDelete(req.params.id);
        if (!vocaloidEliminado) {
            return res.status(404).json({ error: 'Vocaloid no encontrado' });
        }
        res.json({ mensaje: 'Vocaloid eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Vocaloid' });
    }
};

module.exports = {
    crearVocaloid,
    obtenerVocaloids,
    obtenerVocaloidPorId,
    eliminarVocaloid
};
