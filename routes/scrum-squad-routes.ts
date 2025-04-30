import { Router } from "express";
import { postSquad } from "../controllers/scrum-squad-controller";

const router = Router();

router.post("/", postSquad);