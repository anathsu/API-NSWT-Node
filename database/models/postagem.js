const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
    id: {
        type: Int,
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
        default: date.now,
        required: false
    },

});

const Postagem = mongoose.model('Postagem', PostagemSchema);

module.exports = Postagem;