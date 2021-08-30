import {Vegetal} from "./vegetal";
import {Utilisateur} from "./utilisateur";
import {DejaPlante} from "./dejaPlante";

export class Jardin {
  id:number;
  version:number;
  sol:string;
  ensolleilement:string;
  suerficie:number;
  dejaPlante:Array<DejaPlante>;
  utilisateur:Utilisateur;

  constructor(id?: number, version?: number, sol?: string, ensolleilement?: string, suerficie?: number, dejaPlante?: Array<DejaPlante>, utilisateur?: Utilisateur) {
    this.id = id!;
    this.version = version!;
    this.sol = sol!;
    this.ensolleilement = ensolleilement!;
    this.suerficie = suerficie!;
    this.dejaPlante = dejaPlante!;
    this.utilisateur = utilisateur!;
  }
}
