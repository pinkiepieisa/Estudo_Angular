import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-assincrono',
  templateUrl: './validator-assincrono.component.html',
  styleUrl: './validator-assincrono.component.scss'
})
export class ValidatorAssincronoComponent {
  nome = new FormControl('');
}
