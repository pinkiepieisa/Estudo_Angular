import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',

})

export class Card {

  private _planType: string = '';

  @Input('planType') set planType (value: string) {
    this._planType = value.toUpperCase();
  //Alias
  //Set externaliza uma propriedade
  }

  get planType():string {
    return this._planType;
  }

  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;
  //Objeto que torna o input obrigatório

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClick', valueEmitted);
    console.log('planType', this.planType);
  }

}
