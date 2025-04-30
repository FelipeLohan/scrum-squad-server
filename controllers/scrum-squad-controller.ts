import { postScrumSquad } from "../services/scrum-squad-service";

export function postSquad(req, res) {
  try {
    const newSquad = req.body;
    postScrumSquad(newSquad);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
