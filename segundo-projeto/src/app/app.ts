import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('segundo-projeto');

  inputText = "Texto Inicial";
  inputType = "text";
  isDisabled = true;
  // Property Biding

  enableInput() {

    this.isDisabled = false;

  }

  disabledInput() {

    this.isDisabled = true;

  }

  textType() {
    this.inputType = "text";
  }

  passwordType() {
    this.inputType = "password";

  }

  logInputText() {
    console.log();
  }

  // Event Binding
// () está recebendo um valor da propriedade a direita
// [] Está enviando um valor para a propriedade

//Não utilizar any, buscar saber o tipo do objeto

handleInputKeyup(event: KeyboardEvent){
  const currentText = (event.target as HTMLInputElement).value;
  //Forçando uma tipagem
  console.log(currentText);
}

handleInputEvent(event: Event) {
const currentText = (event.target as HTMLInputElement).value;
//Target é a propriedade onde o elemento value está contido

console.log(currentText);
}


}

