import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  });

  constructor() {
    console.log(this.musicasForm);
  }

  adicionarMusica() {
    this.musicas.push(new FormControl('Novo', [Validators.required]));
    // Método push vindo do formArray
  }

  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
    // Método removeAt vindo do formArray
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }
}
