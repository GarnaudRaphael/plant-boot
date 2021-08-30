import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit {

  vegetaux: Array<Vegetal> = new Array<Vegetal>();

  constructor() { }

  ngOnInit(): void {
  }

}
