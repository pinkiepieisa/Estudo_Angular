import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  @HostBinding('disabled') propDisabled = false;
}
