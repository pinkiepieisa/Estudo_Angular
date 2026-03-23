import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]',
  // Transforma em selector de elemento
  host: { 'class': 'ca-u-card-text-title'}
})
export class CardTextTitleDirective {

}
