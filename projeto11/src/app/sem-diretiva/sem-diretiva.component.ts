import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {


  changeBackgroud(event: Event) {
    const pElement = event.target as HTMLParagraphElement;

    pElement.style.background = 'pink';

  }

  returnBackgroud(event: Event) {
    const pElementTwo = event.target as HTMLParagraphElement;
    
    pElementTwo.style.background = 'white';

  }

  // 

  addBgColor: boolean = false;

  onMouseOver() {
    this.addBgColor = true;
  }

  onMouseOut() {
    this.addBgColor = false;

  }
}
