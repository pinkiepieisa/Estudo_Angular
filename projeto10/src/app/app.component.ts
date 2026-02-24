import { ChangeDetectorRef, Component } from '@angular/core';

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
}
