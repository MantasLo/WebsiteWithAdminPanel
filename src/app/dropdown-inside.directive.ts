import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownInside]'
})
export class DropdownInsideDirective {

  @HostBinding('class.show') isOpenInside = false;

  constructor(private _el: ElementRef) { }


  @HostListener('click') toggleOpenn(){
    //if(this.isOpenInside = true){
      this.isOpenInside = !this.isOpenInside;
    //}
      
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
  } 
}
