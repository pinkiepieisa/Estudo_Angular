import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit {

  // @HostBinding('style.backgroundColor') bgColor = 'blue';
  // @HostBinding('textContent') text = 'Sou uma div!';

  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit() {
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    //Traz todos os elementos dentro da div

    if(inputList.length > 1) {
      inputList[1].focus();
    }
  }

}
