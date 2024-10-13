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
        console.error('Error al crear el Vocaloid:', error);
        res.status(400).json({ error: 'Error al crear el Vocaloid', detalles: error.message });
    }
};


const obtenerVocaloids = async (req, res) => {
    try {
        const vocaloids = await Vocaloid.find();
        res.json(vocaloids);
    } catch (error) {
        console.error('Error al obtener los Vocaloids:', error);
        res.status(500).json({ error: 'Error al obtener los Vocaloids', detalles: error.message });
    }
};


const obtenerVocaloidPorId = async (req, res) => {
    try {
        console.log('ID recibido:', req.params.id);
        
        const vocaloid = await Vocaloid.findById(req.params.id);
        if (!vocaloid) {
            return res.status(404).json({ error: 'Vocaloid no encontrado' });
        }
        res.json(vocaloid);
    } catch (error) {
        console.error('Error al obtener el Vocaloid:', error);
        res.status(500).json({ error: 'Error al obtener el Vocaloid', detalles: error.message });
    }
}


const eliminarVocaloid = async (req, res) => {
    try {
        const vocaloidEliminado = await Vocaloid.findByIdAndDelete(req.params.id);
        if (!vocaloidEliminado) {
            return res.status(404).json({ error: 'Vocaloid no encontrado' });
        }
        res.json({ mensaje: 'Vocaloid eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el Vocaloid:', error);
        res.status(500).json({ error: 'Error al eliminar el Vocaloid', detalles: error.message });
    }
};

module.exports = {
    crearVocaloid,
    obtenerVocaloids,
    obtenerVocaloidPorId,
    eliminarVocaloid
};
