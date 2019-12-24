import { Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChoiceStyling]'
})
export class ChoiceStylingDirective {
  @Input() choiceActive: boolean;

  constructor(private elRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter') onmouseenter() {
    if (this.choiceActive) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    }
  }

  @HostListener('click') onclick() {
    if (this.choiceActive) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }
  }

  @HostListener('blur') onblur() {
    if (this.choiceActive) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    }

  }

}
