import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    //AccueilComponent,
    AppComponent,
    //MonJardinComponent
    //DejaPlanteComponent,
    //VegetalComponent,
    //RechercheAlternativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UtilisateurService,RechercheService,PersonneService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
