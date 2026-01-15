import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';

@NgModule({
  //Propriedades do objeto
  declarations: [
    //Declara os componentes
    App,
    Card
  ],
  //Externaliza funcionalidades para que seu uso seja feito em outros módulos
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
