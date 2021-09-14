import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighting]'
})
export class HighlightingDirective {
  elementRef: any;
@Input() color:string='red';
  constructor(private elementref:ElementRef) { }
  @HostListener('mouseenter')
   public changeBackgroundColor(){
     this.elementRef.nativeElement.style.backgroundColor=this.color;
    }
   @HostListener('mouseleave')
    public changeBackgroundColorToPreviousState(){
     this.elementRef.nativeElement.style.backgroundColor='';
   }

}
