import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }
  highlightElement() {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    this.elem.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlightElement();
  }

}
