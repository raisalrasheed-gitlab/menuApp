const express = require('express');
const router = express.Router();
const Menu = require('../models/menuSchema');

module.exports.addMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = await Menu.createOne({ name, description, items: [] });
    res.status(201).json({ message: 'Menu is successfully created', menu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
