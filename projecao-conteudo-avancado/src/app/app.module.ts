import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuCompComponent } from './meu-comp/meu-comp.component';
import { MeuNovoCompComponent } from './meu-novo-comp/meu-novo-comp.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuCompComponent,
    MeuNovoCompComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
