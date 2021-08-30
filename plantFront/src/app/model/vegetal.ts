import {GuideUtilisation} from "./guideUtilisation";
import {Article} from "./article";
import {Commentaire} from "./commentaire";
import {DejaPlante} from "./dejaPlante";
import {Notice} from "./notice";

export class Vegetal {
  id: number;
  version: number;
  Nature: Nature;
  tempsDeVie: TempsDeVie;
  presentation: Presentation;
  sol: Sol;
  guideUtilisation: GuideUtilisation;
  utilite:Utilite;
  typeDeFeuille: TypeDeFeuille;
  tempsDeFeuille: TempsDeFeuille;
  utiliteOrnement: UtiliteOrnement;
  utiliteGastronomie: UtiliteGastronomie;
  couleur: Couleur;
  utiliteComposition: utiliteComposition;
  utiliteCimetiere: utiliteCimetiere;
  consommationEau: number;
  consommationEngrais: number;
  prix:  number;
  prixFruit: number;
  affinite: Vegetal;
  dejaPlante: DejaPlante;
  commentaire: Commentaire;
  article: Article;
  notice: Notice;

  constructor(id?:number, version?:number, nature?:Nature, tempsDeVie?: TempsDeVie, presentation?: Presentation, sol?: Sol, guideUtilisation?:GuideUtilisation, utilite?:Utilite, typeDeFeuille?:TypeDeFeuille, tempsDeFeuille?:TempsDeFeuille, utiliteOrnement?: UtiliteOrnement,utiliteGastronomie?: UtiliteGastronomie, couleur?: Couleur, utiliteComposition?:UtiliteComposition, utiliteCimetiere?:UtiliteCimetiere, consommationEau?: number, consommationEngrais?:ConsommationEngrais, prix?:number, prixFruit?:number, affinite?: Vegetal, dejaPlante?:DejaPlante, commentaire?: Commentaire, article?: Article, notice?:Notice) {
    this.id = id;
    this.version = version;
    this.nature = nature;
    this.tempsDeVie = tempsDeVie;
    this.presentation = presentation;
    this.sol = sol;
    this.guideUtilisation = guideUtilisation;
    this.utilite = utilite;
    this.typeDeFeuille = typeDeFeuille;
    this.tempsDeFeuille = tempsDeFeuille;
    this.utiliteOrnement = utiliteOrnement;
    this.utiliteGastronomie = utiliteGastronomie;
    this.couleur = couleur;
    this.utiliteComposition = utiliteComposition;
    this.utiliteCimetiere = utiliteCimetiere;
    this.consommationEau = consommationEau;
    this.consommationEngrais = consommationEngrais;
    this.prix = prix;
    this.prixFruit = prixFruit;
    this.affinite = affinite;
    this.dejaPlante = dejaPlante;
    this.commentaire = commentaire;
    this.article = article;
    this.notice = notice;

  }
}
