const express = require('express');
const router = express.Router();
const controladorFamilias = require('../controllers/familyController');

router.post('/add', controladorFamilias.crearFamilia);
router.get('/get', controladorFamilias.obtenerTodasLasFamilias);
router.get('/:id', controladorFamilias.obtenerFamiliaPorId);
router.put('/update/:id', controladorFamilias.actualizarFamilia);
router.delete('/delete/:id', controladorFamilias.eliminarFamilia);

module.exports = router;
