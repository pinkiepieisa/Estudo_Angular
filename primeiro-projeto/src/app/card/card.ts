import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  //Objeto da classe
  planos = {
    tipo: 'Simples',
    preco: 100,
    info: {
      tipos: 'Simples mesmo',
      precos: 2400
    } //Objeto do objeto
  };

  /* null = undefined */
  
  /* Usando uma função
  
  tipo = 'Simples plus';
  preco = 100;

  getFullPrice() {
    setTimeout(()=> {
      console.log('Set Timeout');
      this.tipo = 'Super Simples';
    }, 4000) //É em milisegundos

    return 'R$' + this.preco + ',00/Mês'
  }*/
}
