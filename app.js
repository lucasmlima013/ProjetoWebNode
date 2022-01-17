var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("Bem vindo!!!")
}).listen(8080);

console.log("Servidor OK")

/* Teste */