
import NaoEncontrado from "../erros/naoEncontrado.js";
import {Autor} from "../models/index.js";

class AutorController {

  static atualizaAutor = async (req, res, next) => { 
    try {
      let autor = await Autor.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if(autor!= null) {
        res.status(200).send(autor);
      }else{
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
    
  static deletaAutor = async (req, res, next) => {
    try {   
      let autor = await Autor.findByIdAndDelete(req.params.id);
      if(autor != null){
        res.status(200).send({message:`Autor ${autor.nome} removido com sucesso!`});
      }else{
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch(erro){
      next(erro);
    }
  };

  static obterAutor = async (req, res, next) => {
    try{
      let autor = await Autor.findById(req.params.id);
      if(autor != null){
        res.status(200).send(autor);
      }else{
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };

  static listarAutores = async (req, res, next) => {
    try{
      let autores = await Autor.find();
      res.status(200).send(autores);
    } catch(erro){
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try{
      let autor = await Autor.create(req.body);
      res.status(201).send(autor.toJSON());
    }catch(erro){
      next(erro);
    }                
  };
}

export default AutorController;