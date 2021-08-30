import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {PersonneComponent} from "./personne/personne.component";
import {RechercheComponent} from "./recherche/recherche.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  //{path: "mon-jardin", component: MonJardinComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
