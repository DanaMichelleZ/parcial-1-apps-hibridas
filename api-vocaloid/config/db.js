const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vocaloidDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error, no te conectaste a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = conectarDB;
