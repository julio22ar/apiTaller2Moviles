const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1); // Detener la aplicación si no puede conectarse a la base de datos
  }
};

module.exports = conectarBD;
