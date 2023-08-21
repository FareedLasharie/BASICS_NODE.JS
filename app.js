const http  = require ('http');
const fs = require ('fs');
const path = require ('path');


const server = http.createServer((req,res) => {

    if(req.url === '/') {
        res.end ('<h1> HELLO WORLD </h1>');
    }

}
    
);
server.listen (5000);