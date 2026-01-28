import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardButton } from '../card-button/card-button';
import { CardRoxoButton } from '../card-roxo-button/card-roxo-button';
import { CardRoxo } from '../card-roxo/card-roxo';
import { CardButtonCancel } from '../card-button-cancel/card-button-cancel';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    Card,
    CardRoxo,
    CardButton,
    CardRoxoButton,
    CardButtonCancel

  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  //Exportação dos componentes para que eles possam ser usados em outro módulo
  exports: [
    Card,
    CardRoxo 
  ]
})
export class CardsModule { 
  
}