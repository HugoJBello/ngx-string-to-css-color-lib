import { Directive, ElementRef, Input, OnInit} from '@angular/core';
import { StringToColorService} from "../string-to-color.service";

@Directive({
  selector: '[colorBackgroundFromText]'
})
export class ColorBackgroundFromTextDirective implements OnInit{
  @Input() applyShade:string;
  @Input() colorBackgroundFromText: string;
  constructor(public el: ElementRef, public stringToColor: StringToColorService) {
  }

  ngOnInit() {
    if (this.colorBackgroundFromText){
      this.el.nativeElement.style.backgroundColor = this.stringToColor.stringToColour(this.colorBackgroundFromText,this.applyShade);
    } else {
      this.el.nativeElement.style.backgroundColor = this.stringToColor.stringToColour(this.el.nativeElement.innerText, this.applyShade);
    }
    console.log(this.el.nativeElement);
  }

}
