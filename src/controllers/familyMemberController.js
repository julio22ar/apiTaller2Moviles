const Familia = require('../models/familyModel');

//archivo para manejar los CRUD
exports.agregarMiembro = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.familiaId);
    if (!familia) {
      return res.status(404).send();
    }
    familia.miembros.push(req.body);
    await familia.save();
    res.status(201).send(familia);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerTodosLosMiembros = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.familiaId);
    if (!familia) {
      return res.status(404).send();
    }
    res.status(200).send(familia.miembros);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.obtenerMiembroPorId = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.familiaId);
    if (!familia) {
      return res.status(404).send();
    }
    const miembro = familia.miembros.id(req.params.miembroId);
    if (!miembro) {
      return res.status(404).send();
    }
    res.status(200).send(miembro);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.actualizarMiembro = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.familiaId);
    if (!familia) {
      return res.status(404).send();
    }
    const miembro = familia.miembros.id(req.params.miembroId);
    if (!miembro) {
      return res.status(404).send();
    }
    Object.assign(miembro, req.body);
    await familia.save();
    res.status(200).send(miembro);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.eliminarMiembro = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.familiaId);
    if (!familia) {
      return res.status(404).send();
    }
    familia.miembros.id(req.params.miembroId).remove();
    await familia.save();
    res.status(200).send(familia);
  } catch (error) {
    res.status(500).send(error);
  }
};
