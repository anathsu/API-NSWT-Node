const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', "Access-Control-Allow-Header",
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
    next();

    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET'
        );
    };
});

//Declarando as rotas
const rotaPostagem = require('./routes/postagem');

//Rotas
app.use('/postagem', rotaPostagem);

app.use('/teste', (req, res , next) => {
    res.status(200).send({
        mensagem: "Tudo certo com o teste"
    });
});

//Caso não encontre a rota
app.use((req, res , next) => {
    const erro = new Error('Serviço não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


// module.exports = app;
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor express iniciado em http://localhost:4000')
});