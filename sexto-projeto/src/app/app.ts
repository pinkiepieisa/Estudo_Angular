import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sexto-projeto');
  minhaProp = true;
  pessoa: any = {
    status: 1,
    name: 0,
  }

  toggleProo() {
    this.minhaProp = !this.minhaProp;
  }

  //Exemplo de retornos positivos
  isTruthy() {
    return{};
    // return[];
    // return true;
    // return 1;
    // return "teste";
    // return "0";
    // return "false";
    // return this.pessoa.status;
  }

  isFalse() {
    return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.pessoa.name;
    // return this.pessoa.endereco?rua;
    // any ou undefined <- do lado esquerdo do ?
    //Tudo retorna falso
  }
}
