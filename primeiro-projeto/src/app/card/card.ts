import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.None, //Torta a estilização desse componente global
  //Não é muito usual
})
export class Card {

  //Objeto da classe
  planos = {
    tipo: 'Simples',
    preco: 100,
    info: {
      tipos: 'Simples mesmo',
      precos: 2400,
    } //Objeto do objeto

  };

  /*plano = {
    //@ts-ignore
    valores
  }*/
  
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

    /* null = undefined = vazio */

    /* undefined?.tipo
    encadeamento opcional
    valida se o objeto é undefined 
    optional chanining*/

    /* //@ts-ignore 
    faz o ts ignorar tipagem e afins da propriedade  */
}
