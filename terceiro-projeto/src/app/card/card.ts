import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',

})

export class Card {

  @Input('planType') planType: string = ''; //Alias
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;
  //Objeto que torna o input obrigatório

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClick', valueEmitted);
  }

}
