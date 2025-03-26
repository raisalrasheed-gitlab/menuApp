const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: 'src/.env' });
Mongo_url = process.env.MONGO_DB;
mongoose
  .connect(Mongo_url)
  .then(() => {
    console.log('[Database]: Connected to the database!');
  })
  .catch(err => {
    console.log('[Database]: Cannot connect to the database!', err);
    process.exit();
  });
module.exports = mongoose;
