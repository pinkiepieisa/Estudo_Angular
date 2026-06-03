import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})
export class FormComChamadaHttpComponent implements OnInit {
  pessoaForm!: FormGroup;
  
  constructor(
    private readonly _userService: UserService
  ) {}

  ngOnInit() {
    this.createPessoaForm();
  }

  //Alias

  get telefone(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  private createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      dade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefone: new FormArray([]),
    })
  }

  private getUserAndFullfilPessoaForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    });
  }

  private fullfilPessoaForm(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);

    (this.pessoaForm.get('telefones') as FormArray).clear();

    // Push manual
    userResponse.telefones.forEach((tel: any) => {
      this.telefone.push(new FormGroup({
        numero: new FormControl(tel.numero),
        ddd: new FormControl(tel.ddd),
      }));
    });

    console.log(this.pessoaForm);
  } // Só pode usar dessa abordagem devido ao fato de que as propriedades do create e do getUser são iguais, dessa forma o Angular faz as ligações 
}

// Push manual de objetos arrys, pois não são pegos pelo método acima
