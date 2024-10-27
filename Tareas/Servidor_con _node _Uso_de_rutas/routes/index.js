const express = require("express");
const router = express.Router();
const path = require("path");

//las rutas
router.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname + '../public', 'index.html'));
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname + '../public', 'formulario.html'));
});

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '../public', 'informacion.html'));
});


//exportacion del enrutador
module.exports = router;