const express = require('express');
const {
  addMenu,
  getMenu,
  getMenuById,
  addMenuItem,
} = require('../controllers/menu-control');

const router = express.Router();

router.post('/', addMenu);
router.get('/', getMenu);
router.get('/:id', getMenuById);
router.post('/:id/item', addMenuItem);

module.exports = router;
