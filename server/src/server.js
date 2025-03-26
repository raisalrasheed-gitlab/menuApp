const express = require('express');
const env = require('dotenv');
const db = require('../src/config/db');
const routes = require('./Routes-main');
const cors = require('cors');
const app = express();
//config env
env.config({ path: 'src/.env' });
app.use(cors());
app.use(express.json());

app.use(routes);
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'no route found' });
});
app.listen(process.env.PORT, () => {
  console.log(`App is running at http://localhost:5000`);
});
