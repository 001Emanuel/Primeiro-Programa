const express = require("express");
const router=express.Router();// trabalha com as rotas
const path=require ('path');//endereço de cada rota
router.get('/', function(req,res){
    res.render('index');
})
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/../about.html'));
})

module.exports =router;