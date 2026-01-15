import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';
import { CardRoxo } from './card-roxo/card-roxo';
import { CardButton } from './card-button/card-button';
import { CardRoxoButton } from './card-roxo-button/card-roxo-button';

@NgModule({
  //Propriedades do objeto
  declarations: [
    //Declara os componentes
    App,
    Card,
    CardRoxo,
    CardButton,
    CardRoxoButton
  ],
  //Externaliza funcionalidades para que seu uso seja feito em outros módulos
  //Apenas para módulos
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
