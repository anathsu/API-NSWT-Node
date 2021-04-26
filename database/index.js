const mongoose = require('mondoose');

mongoose.connect('mongodb://localhost/apiSwitch', { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;