import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardsModule } from './cards/cards-module';


@NgModule({
  //Propriedades do objeto
  declarations: [
    //Declara os componentes
    App  
  
  ],
  //Apenas para módulos
  //Módulos que possuem componentes que estão sendo utilizados
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CardsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
