import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    let mensagemErro = Object.values(erro.errors)
      .map((erro)=> erro.message)
      .join("; "); 

    super(`Um ou mais erros foram encontrados: ${mensagemErro}`);
  }
}

export default ErroValidacao;