import { Router } from "express";
import { fetchScrumSquads } from "../controllers/scrumsquadcontroller";

const scrumRouter = Router();

scrumRouter.get("/squad", fetchScrumSquads);

export default scrumRouter;
