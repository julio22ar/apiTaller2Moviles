    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();

    // Middlewares
    app.use(bodyParser.json());
    app.use(cors());

    // Rutas
    const rutasFamilias = require('./routes/familyRoutes');
    const rutasMiembros = require('./routes/familyMemberRoutes');
    app.use('/api/familias', rutasFamilias);
    app.use('/api', rutasMiembros);

    module.exports = app;
