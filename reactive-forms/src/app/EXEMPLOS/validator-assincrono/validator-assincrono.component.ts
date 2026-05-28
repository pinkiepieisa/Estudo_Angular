import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-validator-assincrono',
  templateUrl: './validator-assincrono.component.html',
  styleUrl: './validator-assincrono.component.scss'
})
export class ValidatorAssincronoComponent {
  nome = new FormControl('', {
    asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)],
    updateOn: 'blur',
    // Atualiza quando clica fora
  });
  // Configuração obrigatória

  constructor(
    private readonly _userValidatorService: UserValidatorService
  ) {}
}
