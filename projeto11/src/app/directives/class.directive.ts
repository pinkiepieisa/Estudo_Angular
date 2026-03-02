import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // @HostBinding('attr.class') attrClass = 'meu-texto meu-tamanho'

  // @HostBinding('class') class = 'meu-texto'

  // @HostBinding('className') className = 'meu-texto'

  @HostBinding('class') classObj = {
    'meu-texto': true,
    'meu-tamanho': true
  }
}
