import {Vegetal} from "./vegetal";

export class  Commentaire{
  id: number;
  version: number;
  utilisateur: Utilisateur;
  vegetal: Vegetal;
  contenu: string;

  constructor( id?: number, version?: number, utilisateur?: Utilisateur, vegetal?: Vegetal, contenu?: string) {
    this.id = id;
    this.version = version;
    this.utilisateur= utilisateur;
    this.vegetal = vegetal;
    this.contenu = contenu;
  }

}
