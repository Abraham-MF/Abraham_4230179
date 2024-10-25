const http = require('http');

const port = 3006;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content.Type':'text/plain'});
    res.end('Jaime Abraham Morales Frausto 423017911');
});

server.listen(port,()=>{
    console.log(`el servidor esta en http:localhost:${port}`);
});