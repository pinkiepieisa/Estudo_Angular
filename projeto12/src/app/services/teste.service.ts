import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  // constructor(private _elRef: ElementRef) { }

  create(elRef: ElementRef) { //Parâmetro
    const novaDiv = document.createElement('div');
    //Utiliza o DOM
    //Document deixa global para a aplicação inteira

    novaDiv.textContent = 'Sou uma nova div sendo criada!';
    novaDiv.classList.add('bg-red');
    //Cria uma classe para o novo elemento

    elRef.nativeElement.appendChild(novaDiv);
    //Injeta no HTML, appendChild gera o novo elemento
  }
}
