const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    titulo: {
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
    dados:{
        type: Date,
        default: Date.now(),
        required: false
    },

});

// const Postagem = mongoose.model('Postagens', PostagemSchema);

module.exports = mongoose.model('Postagens', PostagemSchema);