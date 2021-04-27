const mongoose = require('../index');

const PostagemSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    equipe: {
        type: String,
        require: true,
    },
    creditos: {
        type: String,
        require: true,
    },
    download: {
        type: String,
        require: true,
    },
    data:{
        type: Date,
        default: Date.now(),
        required: false
    },

});

module.exports = mongoose.model('postagens', PostagemSchema);