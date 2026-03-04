import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  // Injeção de dependência
  constructor(private readonly _elRef: ElementRef) {

  }
  // Metódo fica específico para aquele componente

  ngOnInit() {
    console.log(this._elRef);

    const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    divEl.textContent = ' Sou uma outra div! ';
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('Cliquei na div!!!');
    });

    console.log(divEl);

  }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'deeppink';
    this.divEl.nativeElement.textContent = 'Sou uma div!';
    this.divEl.nativeElement.classList.add('minha-classe');
  }
}
