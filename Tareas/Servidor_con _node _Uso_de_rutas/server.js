const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/index');

const app = express();
const port = 3025;

app.use(express.static('public'));

app.use('/', pagesRoutes);

app.get('/', (req,res)=>{
    res.redirect('/index')
});

//servidor
app.listen(port,() =>{
    console.log(`El servidor esta en funcionamiento: http://localhost:${port}`);
});