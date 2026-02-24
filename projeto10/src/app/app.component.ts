import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //INJEÇÃO DE DEPENDÊNCIA

  constructor(
    private _cdRef: ChangeDetectorRef
  ) {}

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

  updateInputText(){
    this.meuInputEl.nativeElement.value = 'Texto atualizado!';
  }

  focus() {
    this.meuInputEl.nativeElement.focus();
  }

  @ViewChild('minhaDiv')
    minhaDiv!: ElementRef<HTMLDivElement>;

  changeText(){
    this.minhaDiv.nativeElement.textContent = 'Funcionou!';
  }

}
