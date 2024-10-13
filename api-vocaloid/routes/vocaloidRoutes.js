const express = require('express');
const router = express.Router();
const {
    crearVocaloid,
    obtenerVocaloids,
    obtenerVocaloidPorId,
    eliminarVocaloid,
    actualizarVocaloid
} = require('../controllers/vocaloidController');


router.post('/', crearVocaloid);
router.get('/', obtenerVocaloids);
router.get('/:id', obtenerVocaloidPorId);
router.delete('/:id', eliminarVocaloid);
router.put('/:id', actualizarVocaloid);

module.exports = router;
