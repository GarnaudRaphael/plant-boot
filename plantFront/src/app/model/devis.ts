import {Article} from "./article";
import {Commande} from "./commande";

export class  Devis{
  id: number;
  version: number;
  montant: number;
  article: Article;
  statut: Statut;
  utilisateur:Utilisateur;
  commande: Commande;

  constructor( id?: number, version?: number, montant?:number, article?: Article, statut?: Statut, utilisateur?: Utilisateur, commande?:Commande) {
    this.id = id;
    this.version = version;
    this.montant = montant;
    this.article = article;
    this.statut = statut;
    this.utilisateur= utilisateur;
    this.commande  = commande;
  }

}
