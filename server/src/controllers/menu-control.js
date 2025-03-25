const express = require('express');
const router = express.Router();
const Menu = require('../models/menuSchema');

module.exports.addMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = await Menu.create({ name, description, items: [] });
    res.status(201).json({ message: 'Menu is successfully created', menu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports.getMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findById({ _id: id });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports.addMenuItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: 'menu not found' });
    }
    menu.items.push({ name, description, price });
    await menu.save();
    res.status(201).json({ messahe: 'menu items is successfully add' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
