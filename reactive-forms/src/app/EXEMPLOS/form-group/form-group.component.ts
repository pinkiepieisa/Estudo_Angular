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
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])
    }),
    //Cascata de validadores
  });

  constructor() {
    console.log(this.pessoaForm);

    this.pessoaForm.valueChanges.subscribe((value) => console.log('Pessoa Form', value));
    // É executado a cada seValue acionado 
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }
  //  Quando invoca com o get ele não vira um método, vira uma propriedade do elemento

  get endereco(): FormGroup {
    return this.pessoaForm.get('endereco') as FormGroup;
  }
  // Alias para reduzir o acesso aos elementos do formgroup filho 

  get rua(): FormControl {
    return this.endereco.get('rua') as FormControl;
  }
  // Acessando e fazendo o alias de um formControl dentro de um formGroup filho

  mostrarValue() {
    console.log(this.pessoaForm.value);
  }

  onFormSubmit() {
    console.log('onFormSubmit')
    console.log(this.pessoaForm.value);
  }

  alteracaoTotal() {
    this.pessoaForm.setValue({
      nome: '',
      email: '',
      endereco: {
        rua: '',
        numero: ''
      }
    });
    // Atualiza todos os controls, por isso todos precisam ser colocados na ordem de declaração
  }

  alteracaoParcial() {
    this.pessoaForm.patchValue({
      nome: 'Alteração parcial',
      endereco: {
        numero: '123'
      }
    });
  } // Atualiza parcualmente os dados escolhidos
}
