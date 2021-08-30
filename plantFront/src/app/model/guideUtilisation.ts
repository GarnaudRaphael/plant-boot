import {Facture, facture} from "./facture";
import {Meteo} from "./meteo";

export class  GuideUtilisation {
  id: number;
  version: number;
  formatSauvegarde: FormatSauvegarde;
  meteo: Meteo;
  facture: Facture;

  constructor( id?: number, version?: number, formatSauvegarde?: FormatSauvegarde, meteo?: Meteo, facture?: Facture) {
    this.id = id;
    this.version = version;
    this.formatSauvegarde = formatSauvegarde;
    this.meteo = meteo;
    this.facture = facture;
  }

}
