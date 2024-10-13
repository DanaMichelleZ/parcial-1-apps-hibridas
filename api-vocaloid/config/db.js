const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vocaloid-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Bien, te conectaste a MongoDB uwu');
    } catch (error) {
        console.error('Error, no te conectaste a MongoDB u.u:', error);
        process.exit(1);
    }
};

module.exports = conectarDB;
