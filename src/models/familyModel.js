const mongoose = require('mongoose');


//Esquema de la entidad miembro de familia
const miembroSchema = new mongoose.Schema({
  numeroDui: { type: String },
  nombreCompleto: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  gradoEscolar: { type: String },
  sabeLeerEscribir: { type: Boolean }
});


//Esquema de la entidad famlia en general
const familiaSchema = new mongoose.Schema({
  comunidad: { type: String, required: true },
  tipoVivienda: { type: String, required: true },
  nivelRiesgo: { type: String, required: true },
  miembros: [miembroSchema],
  geolocalizacion: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true }
  }
});

const Familia = mongoose.model('Familia', familiaSchema);

module.exports = Familia;
