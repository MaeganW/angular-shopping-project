import { HostListener, HostBinding, Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpenClass() {
    this.isOpen = !this.isOpen;
  }

}
