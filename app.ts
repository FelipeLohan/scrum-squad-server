import express from "express";
import squadRouter from "./routes/scrum-squad-routes";
import scrumRouter from "./routes/scrumsquadroutes";

const app = express();

app.use(express.json()); 

app.use(squadRouter);
app.use(scrumRouter);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
