import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.Emulated, 
  //ShadowDom -> Nada afeta o componente e ele não afeta nenhum outro (Apenas os filhos)
  //Emulated é o padrão, não afeta outros componentes, mas é afetado pelos globais desde que tenha !important
  //.None Torna a estilização desse componente global
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
