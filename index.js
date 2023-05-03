const express=require('express');// determinando a utilização do express
const app=express();
const path=require ('path');//endereço de cada rota
const router=express.Router();//trabalha com as rotas


const {engine} = require("express-handlebars");

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },

}))

app.set('view engine', 'handlebars');
router.get('/',function(req,res){
    res.render('index');
})

router.get('/about',function(req,res){
    res.sendFile(oath.join(__dirname+'/about.html'));
})

app.use('/',router);
app.use('/about',router);
app.listen(process.env.port||3000);
console.log("Servidor Rodando");