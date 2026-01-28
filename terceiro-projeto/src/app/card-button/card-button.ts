import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  //templateUrl: './card-button.html',
  template: `
  <div class="card-button">
    Adquirir
</div>
`,
  styleUrl: './card-button.scss',
})
export class CardButton {

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();
  //< > tipagem do output
  //Alias -> Passa outro nome para a propriedade. Não precisa ser o mesmo nome, mas é indicado
  //Alias fica dentro do () do @

  onButtonClick() {

    this.buttonClickEmitter.emit(true);
    //Valor dentro do ()

  }


}
