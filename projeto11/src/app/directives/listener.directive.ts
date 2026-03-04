import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  @HostListener('click')
  onClick(){
    console.log('clicou!');
  }

  @HostListener('keyup', ['$event', '"Meu taclado!"'])
    onKeyup(event: KeyboardEvent, parms2: string){
      console.log('Digitou!', event);

      console.log(parms2);

      const fullText = (event.target as HTMLInputElement).value;

      console.log(fullText);
      
    }

}
