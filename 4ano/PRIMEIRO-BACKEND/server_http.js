import http from "http";

http
  .createServer((req, res) => {
    console.log("Nova requisição");
    res.end("Seja bem vindo!!!");
  })
  .listen(3600);
console.log("Servidor rodando na porta 3600");
