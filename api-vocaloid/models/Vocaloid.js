const mongoose = require('mongoose');

const VocaloidSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        enum: ['Masculino', 'Femenino'],
        required: true,
    },
    desarrollador: {
        type: String,
        required: true,
    },
    idioma: {
        type: [String],
        required: true,
    },
    fechaLanzamiento: {
        type: Date,
        required: true,
    },
    versionMotor: {
        type: String,
        required: true,
    }
});


const Vocaloid = mongoose.model('Vocaloid', VocaloidSchema);

module.exports = Vocaloid;