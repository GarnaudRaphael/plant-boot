import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component';
import {MonJardinComponent} from "./mon-jardin/mon-jardin.component";
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component';

const routes: Routes = [
  {path: "barre-de-recherche", component: BarreDeRechercheComponent},
  {path: "mon-jardin", component: MonJardinComponent},
  {path: "barre-de-recherche", component: BarreDeRechercheComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
