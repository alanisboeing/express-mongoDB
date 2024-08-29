import "dotenv/config";
import app from "./src/app.js";

const porta = process.env.PORT || 3000; //define a porta em que o servidor local vai escutar as requisicoes

app.listen(porta, () => {
  console.log(`Servidor escutando em http://localhost:${porta}`);
});


//COMO ERA SEM O NODE EXPRESS
//const http = require("http"); //usa o módulo http para conectar um servidor local
// //variavel com as rotas que são passadas na url e seus respectivos retornos
// const rotas = {
//     '/': 'Curso de Node',
//     '/livros': 'Entrei na pagina de livros',
//     '/': 'Listagem de autores'
// }
// //cria o servidor utilizando métodos do http:
//     //createServer, que cria o servidor recebendo como parametro reequisicao e resposta;
//     // writeHead, escreve o cabecalho da resposta retornando o status do código
// const server = http.createServer((requisicao, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[requisicao.url]);
//server.listen(porta, () => {
//    console.log(`Servidor escutando em http://localhost:${porta}`)
//})
// })