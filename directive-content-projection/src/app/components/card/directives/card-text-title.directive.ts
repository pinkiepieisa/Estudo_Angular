import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  // Transforma em selector de elemento
  host: { 'class': 'ca-u-card-text-title'}
})
export class CardTextTitleDirective {

}
