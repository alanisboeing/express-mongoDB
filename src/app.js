import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso");
});

const app = express();

routes(app);

app.use(manipulador404);
app.use(manipuladorErros);

export default app;