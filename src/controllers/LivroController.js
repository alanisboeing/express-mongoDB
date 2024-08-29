import NaoEncontrado from "../erros/naoEncontrado.js";
import {Autor, Livro} from "../models/index.js";

class LivroController {

  static atualizaLivro = async (req, res, next) => { 
    try{
      let livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .populate("autor editora");
      if(livro != null){
        res.status(200).send(livro);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
    
  static deletaLivro = async (req, res, next) => {
    try{
      let livro = await Livro.findByIdAndDelete(req.params.id);
      if(livro != null){
        res.status(200).send({message:`Livro ${livro.titulo} removido com sucesso!`});
      }else{
        next(new NaoEncontrado("Id do livro não localizado."));
      } 
    }catch(erro){
      next(erro);
    }
  };

  static obterLivro = async (req, res, next) => {
    try{
      let livro = await Livro.findById(req.params.id)
        .populate("autor", "nome"); //dessa forma será listado somente o atributo 'nome' do autor;
      if(livro!= null){
        res.status(200).send(livro);
      }else{
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
  static listarLivros = async (req, res, next) => {
    try{
      const buscaLivros = Livro.find();
      req.resultado = buscaLivros;
      next();
    }catch(erro){
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try{
      let livro = await Livro.create(req.body);
      res.status(201).send(livro.toJSON());
    }catch(erro){
      next(erro);
    }                
  };

  static listaLivroFiltrado = async (req, res, next) => {
    try{
      const busca = await processaBusca(req.query);
      if(busca !== null){
        const livrosResultado = Livro
          .find(busca)
          .populate("autor");

        req.resultado = livrosResultado;

        next();
      }else{
        res.status(200).send([]);
      }

    }catch(erro){
      next(erro);
    }
  }; 
}

async function processaBusca(param) {
  let { titulo, editora, minPaginas, maxPaginas, nomeAutor } = param;
  let busca = {};
  if (editora)
    busca.editora = { $regex: editora, $options: "i" };

  if (titulo)
    busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas)
    busca.páginas = {};

  if (minPaginas)
    busca.páginas.$gte = minPaginas;

  if (maxPaginas)
    busca.páginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await Autor.findOne({ nome: nomeAutor });
    if (autor !== null) {
      busca.autor = autor._id;
    }else{
      busca = null;
    }
  }
  return busca;
}

export default LivroController;

