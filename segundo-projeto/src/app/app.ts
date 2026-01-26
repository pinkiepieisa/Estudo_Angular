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

}
