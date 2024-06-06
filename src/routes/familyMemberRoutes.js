const express = require('express');
const router = express.Router({ mergeParams: true });
const controladorMiembros = require('../controllers/familyMemberController');

router.post('/:familiaId/miembros/add', controladorMiembros.agregarMiembro);
router.get('/:familiaId/miembros', controladorMiembros.obtenerTodosLosMiembros);
router.get('/:familiaId/miembros/:miembroId', controladorMiembros.obtenerMiembroPorId);
router.put('/:familiaId/miembros/:miembroId', controladorMiembros.actualizarMiembro);
router.delete('/:familiaId/miembros/:miembroId', controladorMiembros.eliminarMiembro);

module.exports = router;
