import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true })
  planType: string = '';

  @Input({ required: true })
  planPrice: number = 0;

  @Input({ required: true })
  cardStyle: 'orange' | 'purple' = 'orange';

  @Output('buttonClicked')
  buttonClickedEmitt = new EventEmitter<void>();


  onButtonClicked() {

    this.buttonClickedEmitt.emit()

  }
}
