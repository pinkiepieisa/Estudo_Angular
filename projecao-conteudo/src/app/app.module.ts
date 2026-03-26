import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompTextoComponent } from './comp-texto/comp-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompTextoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
