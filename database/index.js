const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiNSWT', {
    useMongoClient: true
}).then(() => {
    console.log("Conectado ao banco de dados MongoDB com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao MongoDB: "+err)
});

module.exports = mongoose;