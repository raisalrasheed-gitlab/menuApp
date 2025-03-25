const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [MenuItemSchema], // Embedded items array
});

const Menu = mongoose.model('Menus', MenuSchema);
module.exports = Menu;
