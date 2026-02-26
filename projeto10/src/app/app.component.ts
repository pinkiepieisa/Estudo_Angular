import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  //INJEÇÃO DE DEPENDÊNCIA

  constructor(
    private _cdRef: ChangeDetectorRef
  ) { }

  changeDetection() {
    this._cdRef.detectChanges();
  }

  teste = 'Felipe';

  clicou(input: HTMLInputElement) {
    console.log(input.value)
  }

  // 

  @ViewChild('maisUmInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Texto atualizado!';
  }

  focus() {
    this.meuInputEl.nativeElement.focus();
  }

  @ViewChild('minhaDiv')
  minhaDiv!: ElementRef<HTMLDivElement>;

  changeText() {
    this.minhaDiv.nativeElement.textContent = 'Funcionou!';
  }

  @ViewChild('meuCompFilho')
  filhoCompRef!: FilhoComponent;
  // Tipagem do componente segue o nome do component

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse "Oie!"';
  }

  

  // @ViewChild('meuInputFoco')
  // inputFocus!: ElementRef<HTMLInputElement>;

  // ngOnInit() {
  //   console.log('ngOnInit', this.inputFocus);
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit', this.inputFocus);

  //   this.inputFocus.nativeElement.focus();

  // }

  // 

  buttonList = [
    'Botão 1',
    'Botão 2',
    'Botão 3'
  ];

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;
  //ElementRef é uma tipagem genérica

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    console.log(this.buttonsEl);

    console.log(this.buttonsEl.toArray());

    const primeiro = this.buttonsEl.toArray()[0];
    //Acessa o primeiro item da lista 

    primeiro.nativeElement.style.backgroundColor = 'purple';

    this.buttonsEl.changes.subscribe((result) => {
      console.log(result);
    })
    
  }

  changeColor(event: Event) {
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;

    //Tipagem especifica para os métodos e propriedades do tipo button

    btnElement.style.backgroundColor = 'pink';
    btnElement.style.color = 'white';
  }

  resetButton() {
    this.buttonsEl.forEach((btnEl) => {
      console.log(btnEl);

      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';

    });
  }

  first() {

    const primeiro = this.buttonsEl.get(0);
    const primeiroEl = 
      this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

    console.log(primeiro);
    console.log(primeiroEl);

  }

  remove() {
    this.buttonList.shift();
  }

}
