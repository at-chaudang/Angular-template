import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnFocus]'
})
export class OnFocusDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'has-content');
  }

  @HostListener('blur') onBlur() {
    if (!this.elementRef.nativeElement.value) {
      this.renderer2.removeClass(this.elementRef.nativeElement, 'has-content');
    }
  }

}
