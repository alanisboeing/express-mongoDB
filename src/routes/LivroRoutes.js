import express from "express";
import LivroController from "../controllers/LivroController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/busca", LivroController.listaLivroFiltrado, paginar)
  .get("/livros/:id", LivroController.obterLivro)
  .put("/livros/:id", LivroController.atualizaLivro)
  .delete("/livros/:id", LivroController.deletaLivro)
  .post("/livros", LivroController.cadastrarLivro);

export default router;