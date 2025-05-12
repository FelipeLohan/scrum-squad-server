
import { RequestHandler } from "express";
import { getScrumSquads } from "../services/scrumsquadservice";


export const fetchScrumSquads: RequestHandler = async (req, res) => {
  try {
    const squadsDB = await getScrumSquads();

    const squads = squadsDB.map((registro) => ({
      id: registro.Id,
      squad: registro.Squad,
      tarefas: registro.Tarefas,
      impedimentos: registro.Impedimentos,
      dataRegistro: registro.data_registro,
    }));

    res.status(200).json(squads);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        message: "Erro ao buscar os Scrum Squads",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Erro desconhecido ao buscar os Scrum Squads",
      });
    }
  }
};