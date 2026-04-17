import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
