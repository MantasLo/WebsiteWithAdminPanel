import { Directive, HostBinding, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.toggleClass') isOpenn = false;

  

  constructor(private _el: ElementRef) { }
  isOpen: boolean = false;

  // @HostListener('click') toggletoggleClass(){
  //   if(this.isOpen == true){
  //     console.log(this.isOpenn);
  //     this.isOpen = !this.isOpen;
  //     this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
  //   }
  //   console.log(this.isOpenn);

  //   console.log('has class oppen     ', this.ifOppen.nativeElement.classList.contains('open')) 
  // } 



  
}
