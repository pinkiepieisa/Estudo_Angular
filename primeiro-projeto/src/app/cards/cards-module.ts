import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardButton } from '../card-button/card-button';
import { CardRoxoButton } from '../card-roxo-button/card-roxo-button';
import { CardRoxo } from '../card-roxo/card-roxo';



@NgModule({
  declarations: [
    Card,
    CardRoxo,
    CardButton,
    CardRoxoButton
  ],
  imports: [
    CommonModule,
  ],
  //Exportação dos componentes para que eles possam ser usados em outro módulo
  exports: [
    Card,
    CardRoxo,  
  ]
})
export class CardsModule { }
