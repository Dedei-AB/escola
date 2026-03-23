import Fastify from "fastify";

const server = Fastify();

server.get("/", async (request, reply) => {
  console.log("Nova requisição");
  return "Seja bem vindo!!!";
});

server.listen({ port: 3600 }, (err, address) => {
  if (err) throw err;
  console.log("Servidor rodando na porta 3600");
});
