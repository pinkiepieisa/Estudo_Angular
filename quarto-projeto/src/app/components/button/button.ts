import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({ required: true, alias: 'text' }) buttonText: string = '';

  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'purple' = 'white';

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }

  @Input({ alias: 'disabled' }) isDisabled: boolean = false;
}
