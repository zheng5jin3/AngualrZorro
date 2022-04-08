import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightAble][highlightClass]'   //注意此处与下面@Input变量名对应
})
export class HighlightDirective {

  constructor(private e1: ElementRef, private rd: Renderer2) { }

  private _isAddClass: boolean = false;
  @Input('highlightAble')
  set isAddClass(value: boolean) {
    this._isAddClass = value;
  }
  get isAddClass() {
    return this._isAddClass;
  }

  @Input() highlightClass: string;

  @HostListener('mouseenter', ['$event']) onmouseenter(ev: Event) {
    if (this._isAddClass) {
      this.rd.addClass(this.e1.nativeElement, this.highlightClass);
    }
  }

  @HostListener('mouseleave', ['$event']) onmouseleave(ev: Event) {
    this.rd.removeClass(this.e1.nativeElement, this.highlightClass);
  }

}
