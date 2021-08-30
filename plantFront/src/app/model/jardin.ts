import {DejaPlante} from "./dejaPlante";
import {RecetteJardin} from "./recetteJardin";
import {Meteo} from "./meteo";

export class  Jardin {
  id: number;
  version: number;
  dejaPlante: DejaPlante;
  sol : Sol;
  exposition: Exposition;
  superficie : string;
  utilisateur : Utilisateur;
  meteo : Meteo;

  constructor( id?: number, version?: number, dejaPlante?: DejaPlante, sol?: Sol, exposition?: Exposition, superficie?:string, utilisateur?:Utilisateur, recetteJardin?:RecetteJardin, meteo?:Meteo) {
    this.id = id;
    this.version = version;
    this.dejaPlante = dejaPlante;
    this.sol = sol;
    this.exposition = exposition;
    this.superficie = superficie;
    this.utilisateur = utilisateur;
    this.recetteJardin = recetteJardin;
    this.meteo = meteo;
  }

}

  recetteJardin : RecetteJardin;