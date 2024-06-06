const Familia = require('../models/familyModel');


//archivo para manejar los CRUD
exports.crearFamilia = async (req, res) => {
  try {
    const familia = new Familia(req.body);
    await familia.save();
    res.status(201).send(familia);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.obtenerTodasLasFamilias = async (req, res) => {
  try {
    const familias = await Familia.find();
    res.status(200).send(familias);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.obtenerFamiliaPorId = async (req, res) => {
  try {
    const familia = await Familia.findById(req.params.id);
    if (!familia) {
      return res.status(404).send();
    }
    res.status(200).send(familia);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.actualizarFamilia = async (req, res) => {
  try {
    const familia = await Familia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!familia) {
      return res.status(404).send();
    }
    res.status(200).send(familia);
  } catch (error) {
    res.status(400).send(error);
  }
};



exports.eliminarFamilia = async (req, res) => {
  try {
    const familia = await Familia.findByIdAndDelete(req.params.id);
    if (!familia) {
      return res.status(404).send();
    }
    res.status(200).send(familia);
  } catch (error) {
    res.status(500).send(error);
  }
};
