import {Vegetal} from "./vegetal";

export class  Notice {
  id: number;
  version: number;
  temps: Temps;
  engrais: Engrais;
  vegetal: Vegetal;

  constructor( id?: number, version?: number, temps?: Temps, engrais?: Engrais, vegetal?: Vegetal) {
    this.id = id;
    this.version = version;
    this.temps = temps;
    this.engrais = engrais;
    this.vegetal= vegetal;

  }
}
