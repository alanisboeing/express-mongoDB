import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O titulo do livro é obrigatório"]},
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "O autor é obrigatório"]},
    gênero: {
      type: String, 
      required: [true, "O gênero do livro é obrigatório"]},
    editora: {
      id: {type: String},
      nome: {
        type: String,
        required: [true, "A editora é obrigatória"],
      } 
    },
    páginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000."
      }
      // min: [10, "{VALUE} não atende ao número mínimo de páginas requerido. O número de páginas deve estar entre 10 e 5000"],
      // max: [5000, "{VALUE} ultrapassa o número de páginas requerido. O número de páginas deve estar entre 10 e 5000"]
    },
  },
);

const Livro = mongoose.model("Livro", livrosSchema);

export default Livro;