import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

//   @HostBinding('attr.style') attrStyle = 'background-color: coral; color: rgb(136, 5, 103);'

  // @HostBinding('style') propStyle = 'background-color: pink; color: white'
  // Mais usual

  // @HostBinding('style') styleObj = {
  //   backgroundColor: 'yellow',
  //   color: 'gray'    
  // }

  @HostBinding('style.backgroundColor') bgColor = 'aquamarine';
  @HostBinding('style.color') color = 'deeppink';
  @HostBinding('style.fontSize.px') size = 35; 

}




