import { Router } from "express";
import { fetchScrumSquads } from "../controllers/scrumsquadcontroller";

const router = Router();

router.get("/", fetchScrumSquads);

export default router;
