import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor() {
    console.log(this.pessoaForm);
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }
  //  Quando invoca com o get ele não vira um método, vira uma propriedade do elemento

  mostrarValue() {
    console.log(this.pessoaForm.value);
  }
}
