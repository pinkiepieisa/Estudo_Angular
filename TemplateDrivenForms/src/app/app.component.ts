import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  nome: string = 'Bela';

  onChange(text: string) {
    console.log(text);

    //...

    this.nome = text; 
    // assim o campo sempre fica atualizado
  }

  show() {
    console.log(this.nome);
  }

  // Form control

  @ViewChild('meuInputFormControl') inputEl!: NgModel;
  // Estado do input
  @ViewChild('meuInput') anotherInputEl!: ElementRef<HTMLInputElement>;
  // Propriedades do input

  ngAfterViewInit() {
    console.log('Form Control =>', this.inputEl);
    console.log('Original =>', this.anotherInputEl);

  }

  send() {
    if(this.inputEl.valid && this.inputEl.touched) {
      console.log('Enviado!');
    }
  }

}
