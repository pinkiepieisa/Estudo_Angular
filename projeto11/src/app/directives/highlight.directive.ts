import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' //Nome da diretiva
})
export class HighlightDirective {

  @HostBinding('style.background-color') bgColor = 'white';
  // Altera propriedades e atributos 
  
  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseout') onMouseOut() {
    this.bgColor = 'transparent';
  }

}
