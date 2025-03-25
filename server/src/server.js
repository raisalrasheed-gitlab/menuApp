const express = require('express');
const env = require('dotenv');
const db = require('../src/config/db');
const routes = require('./Routes-main');
const app = express();
//config env
env.config({ path: './src/.env' });

app.use(express.json());

app.use(routes);
app.listen(process.env.PORT, () => {
  console.log(`App is running at http://localhost:5000`);
});
