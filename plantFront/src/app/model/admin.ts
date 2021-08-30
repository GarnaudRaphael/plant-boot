import {Personne} from "./personne";

export class Admin extends Personne {


  constructor(id: number, version: number, nom: string, prenom: string, adressMail: string, motDePasse: string, pseudo: string, enable: boolean) {
    super(id, version, nom, prenom, adressMail, motDePasse, pseudo, enable);
  }
}
