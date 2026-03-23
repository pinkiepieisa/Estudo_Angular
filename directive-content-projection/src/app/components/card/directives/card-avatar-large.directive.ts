import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large, [appCardLarge]',
  host: { 'class': 'ca-u-card-avatar-large'}
})
export class CardAvatarLargeDirective {

}
