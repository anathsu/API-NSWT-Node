const express = require('express');
const router = express.Router();

//RETORNA TODAS AS POSTAGENS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando GET dentro da rota de Postagem"
    });
});

//RETORNA UMA POSTAGEM PELO ID
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        mensagem: "Usando GET dentro da rota com id de Postagem",
        id: id
    });
});

//CRIA UMA POSTAGEM
router.post('/', (req, res, next) => {
    const postagem = {
        id: req.body.id,
        titulo: req.body.titulo,
        img: req.body.img,
        equipe: req.body.equipe,
        creditos: req.body.creditos,
        download: req.body.download,
        dados: req.body.dados
    };

    res.status(201).send({
        mensagem: "Usando POST dentro da rota de Postagem",
        postagemCriada: postagem
    });
});

//ATUALIZA UMA POSTAGEM PELO ID
router.put('/', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        mensagem: "Usando PUT dentro da rota com id de Postagem",
        id: id
    });
});

//DELETA UMA POSTAGEM PELO ID
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando DELETE dentro da rota de Postagem"
    });
});



module.exports = router;