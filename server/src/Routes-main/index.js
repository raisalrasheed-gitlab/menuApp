const express = require('express');
const dashRoutes = require('./dash-Routes');
const router = express.Router();

router.use('/menu', dashRoutes);

module.exports = router;
