import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextControl } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit {
  nome = new FormControl('Inicial', [invalidTextControl('isabela')]);
  // Validador síncrono 

  // nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);
  // nome = new FormControl('Inicial', {
  //   nonNullable: true,
  //   validators: [Validators.required, Validators.minLength(6)],
  //   updateOn: 'blur'
  // });

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log((this.nome));
    
    this.nome.valueChanges.subscribe(resul => console.log('valuesChanges: ', resul));

    this.nome.statusChanges.subscribe(result => console.log('statusChange: ', result));
  }

  mostrarStatus() {
    console.log(this.nome);
    //Mostra as propriedades do nome
  }

  alterarValor() {
    this.nome.setValue('Alterado!!!');
    //Muda o valor inicial de nome para Alterado
  }

  inputAlterado() {
    console.log(this.nome.value);
  }

  habilitar() {
    this.nome.enable();
  }

  desabilitar() {
    this.nome.disable();
  }

  resetar() {
    this.nome.reset('Valor Reset');
  }

}
