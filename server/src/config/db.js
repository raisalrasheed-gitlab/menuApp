const mongoose = require('mongoose');
Mongo_url = 'mongodb://0.0.0.0:27017/menudash';
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
