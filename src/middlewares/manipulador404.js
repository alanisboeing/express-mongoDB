import NaoEncontrado from "../erros/naoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next){
  let erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador404;