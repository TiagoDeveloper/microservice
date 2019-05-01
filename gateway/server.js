const express = require('express');
const httpProxy = require('express-http-proxy');
const http = require('http');
const app = express();
const distanciaCalc = httpProxy('http://localhost:3001');
const consultaCep = httpProxy('http://localhost:3002');

    app.use((req,res,next) => {
        // TODO: authentication

        next();
    });

app.get('/distancia/:pathParam',(req, res, next) => {
    let params = req.params;
    req.url = `/${params.pathParam}`;
    distanciaCalc(req,res,next);
});

app.get('/consulta/:pathParam',(req, res, next) => {
    let params = req.params;
    req.url = `/${params.pathParam}`;
    consultaCep(req,res,next);
});


const server = http.createServer(app);

server.listen(3000);