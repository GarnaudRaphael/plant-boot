import {Vegetal} from "./vegetal";
import {Utilisateur} from "./utilisateur";
import {Jardin} from "./jardin";

export class DejaPlante {
  id:number;
  version:number;
  vegetal:Vegetal;
  jardin:Jardin;

  constructor(id?: number, version?: number, vegetal?: Vegetal, jardin?: Jardin) {
    this.id = id!;
    this.version = version!;
    this.vegetal = vegetal!;
    this.jardin = jardin!;
  }
}
