const express = require('express');
const router = express.Router();
const {
    crearVocaloid,
    obtenerVocaloids,
    obtenerVocaloidPorId,
    eliminarVocaloid
} = require('../controllers/vocaloidController');


router.post('/', crearVocaloid);
router.get('/', obtenerVocaloids);
router.get('/:id', obtenerVocaloidPorId);
router.delete('/:id', eliminarVocaloid);

module.exports = router;
