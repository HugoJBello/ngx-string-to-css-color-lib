import { Directive, ElementRef, Input, OnInit} from '@angular/core';
import {StringToColorService} from "../string-to-color.service";

@Directive({
  selector: '[colorBackgroundFromText]'
})
export class ColorBackgroundFromTextDirective implements OnInit{
  @Input() applyShade:string;
  @Input() colorBackgroundFromText: string;
  constructor(public el: ElementRef, public stringToColor: StringToColorService) {
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.stringToColor.stringToColour(this.colorBackgroundFromText,this.applyShade);
  }

}
