const express = require('express');
const { addMenu } = require('../controllers/menu-control');

const router = express.Router();

router.post('/', addMenu);

module.exports = router;
