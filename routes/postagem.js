const express = require('express');
const router = express.Router();
const postagem = require('../database/models/postagem');

//RETORNA TODAS AS POSTAGENS
router.get('/', async (req, res, next) => {
    try{
        const getAll = await postagem.find();
        res.json(getAll);
    }catch(err){
        res.send('Erro: ' + err);
    }
});

//RETORNA UMA POSTAGEM PELO ID
router.get('/:id', async (req, res, next) => {
    try{
        const getById = await postagem.findById(req.params.id);
        res.json(getById);
    }catch(err){
        res.send('Erro: ' + err);
    }
  });

//CRIA UMA POSTAGEM
router.post('/', async (req, res, next) => {
    const novaPostagem = new postagem({
        title: req.body.title,
        img: req.body.img,
        equipe: req.body.equipe,
        creditos: req.body.creditos,
        download: req.body.download,
        data: req.body.data
    });
    
    try{
        const np =  await novaPostagem.save();
        res.json(np);
        console.log('Postagem cadastrada com sucesso!')
    }catch(err){
        res.send('Erro: '+err)
        console.log("Houve um erro ao registrar uma postagem: "+err)
    }
});

//ATUALIZA UMA POSTAGEM PELO ID
router.patch('/:id', async (req, res, next) => {
    try{
        const atPostagem = await postagem.findById(req.params.id);
        atPostagem.title = req.body.title;
        atPostagem.img = req.body.img;
        atPostagem.equipe = req.body.equipe;
        atPostagem.creditos = req.body.creditos;
        atPostagem.download = req.body.download;
        atPostagem.data = req.body.data;

        const ap = await atPostagem.save()
        res.json(ap)
        console.log('Postagem atualizada com sucesso!')
    }catch(err){
        res.send('Erro: '+err)
        console.log("Houve um erro ao atualizar a postagem: "+err)
    }
});

//DELETA UMA POSTAGEM PELO ID
router.delete('/:id', async (req, res, next) => {
    try{
        await postagem.findByIdAndRemove(req.params.id);
        console.log("Postagem deletada com sucesso!");
        res.status(200).send({
            mensagem: "Postagem deletada com sucesso!"
        });
    }catch(err){
        res.send('Erro: '+err)
        console.log("Houve um erro ao deletar a postagem: "+err);
    }
});

module.exports = router;