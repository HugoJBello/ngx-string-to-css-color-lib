import { Component, OnInit, Input } from '@angular/core';
import { StringToColorService} from "../../string-to-color.service";

@Component({
  selector: 'tag-with-background-from-text',
  templateUrl: './tag-with-background-from-text.component.html',
  styleUrls: ['./tag-with-background-from-text.component.css']
})
export class TagWithBackgroundFromTextComponent implements OnInit {

  constructor(public stringToColorService: StringToColorService) { }
  @Input() text:string;
  @Input() applyShade:string;

  ngOnInit() {
  }

  calculateColor(str:string) {
    return this.stringToColorService.stringToColour(this.text,this.applyShade);
  }

}
