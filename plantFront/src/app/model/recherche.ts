
export class  Recherche {
  id: number;
  version: number;
  utilisateur: Utilisateur;
  date: string;
  nature: Nature;
  tempsDeVie: TempsDeVie;
  presentation: Presentation;
  sol: Sol;
  comportement: Comportement;
  utilite : Utilite;
  typeDeFeuille: TypeDeFeuille;
  tempsDeFeuille: TempsDeFeuille;
  utiliteOrnement: UtiliteOrnement;
  utiliteGastronomie: UtiliteGastronomie;
  couleur: Couleur;
  utiliteComposition: UtiliteComposition;
  utiliteCimetiere:UtiliteCimetiere;

  constructor( id?: number, version?: number, utilisateur?: Utilisateur, date?: string , nature?: Nature, tempsDeVie?: TempsDeVie, presentation?: Presentation, sol?:Sol, comportement?: Comportement, utilite?: Utilite,typeDeFeuille?:TypeDeFeuille, tempsDeFeuille?: TempsDeFeuille, utiliteOrnement?: UtiliteOrnement, utiliteGastronomie?: UtiliteGastronomie, couleur?: Couleur, utiliteComposition?: UtiliteComposition, utiliteCimetiere?: UtiliteCimetiere) {
    this.id = id;
    this.version = version;
    this.utilisateur = utilisateur;
    this.date = date;
    this.nature= nature;
    this.tempsDeVie = tempsDeVie;
    this.presentation = presentation;
    this.sol = sol;
    this.comportement = comportement;
    this.utilite = utilite;
    this.typeDeFeuille = typeDeFeuille;
    this.tempsDeFeuille = tempsDeFeuille;
    this.utiliteOrnement = utiliteOrnement;
    this.utiliteGastronomie = utiliteGastronomie;
    this.couleur = couleur;
    this.utiliteComposition = utiliteComposition;
    this.utiliteCimetiere = utiliteCimetiere;

  }
}
