import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

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

  // 

  @ViewChild('meuInputFoco')
  inputFocus!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    console.log('ngOnInit', this.inputFocus);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit', this.inputFocus);

    this.inputFocus.nativeElement.focus();

  }
}
