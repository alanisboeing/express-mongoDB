import express from "express";
import AutorController from "../controllers/AutorController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id",AutorController.obterAutor)
  .post("/autores/", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizaAutor)
  .delete("/autores/:id", AutorController.deletaAutor)
;

export default router;