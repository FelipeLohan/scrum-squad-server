import express from "express";
import cors from "cors";
import squadRoutes from "./routes/scrumsquadroutes";  

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/squad", squadRoutes);  

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});