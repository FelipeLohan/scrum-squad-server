import db from "../config/database";


interface ScrumSquad {
  Id: number;
  Squad: string;
  Tarefas: string | null;
  Impedimentos: string | null;
  data_registro: string;
}


export function getScrumSquads(): Promise<ScrumSquad[]> {
  return db("registros").select("*");
}
