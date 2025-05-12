import { Router } from "express";
import { postSquad } from "../controllers/scrum-squad-controller";

const squadRouter = Router();

squadRouter.post("/squad", postSquad); 
export default squadRouter;
