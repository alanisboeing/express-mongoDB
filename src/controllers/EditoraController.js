import NaoEncontrado from "../erros/naoEncontrado.js";
import {Editora} from "../models/index.js";

class EditoraController {

  static listarEditoras = async (req, res, next) => {
    try {
      let editoras = await Editora.find();
      res.status(200).send(editoras);
    } catch(erro){
      next(erro);
    }

  };
  static obterEditora = async (req, res, next) => {
    try {
      let editora = await Editora.findById(req.params.id);
      if(editora != null){
        res.status(200).send(editora);
      }else{
        next(new NaoEncontrado("Id da editora não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
  static cadastrarEditora = async (req, res, next) => {
    try{
      let editora = await Editora.create(req.body);
      res.status(201).send(editora.toJSON());
    }catch(erro){
      next(erro);
    }
  };
  static atualizaEditora = async (req, res, next) => {
    try {
      let editora = await Editora.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if(editora != null){
        res.status(200).send(editora);
      }else{
        next(new NaoEncontrado("Id da editora não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
  static deletaEditora = async (req, res, next) => {
    try{
      let editora = await Editora.findByIdAndDelete(req.params.id);
      if(editora!= null){
        res.status(200).send({message:`Editora ${editora.nome} removida com sucesso!`});
      }else{
        next(new NaoEncontrado("Id da editora não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  };
}

export default EditoraController;