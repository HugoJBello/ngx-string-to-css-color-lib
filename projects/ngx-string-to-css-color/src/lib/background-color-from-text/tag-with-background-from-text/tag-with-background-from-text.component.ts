import { Component, OnInit, Input } from '@angular/core';
import { StringToColorService } from '../../string-to-color.service';

@Component({
  selector: 'tag-with-background-from-text',
  templateUrl: './tag-with-background-from-text.component.html',
  styleUrls: ['./tag-with-background-from-text.component.scss']
})
export class TagWithBackgroundFromTextComponent implements OnInit {

  constructor(public stringToColorService: StringToColorService) { }
  @Input() text: string;
  @Input() applyShade: string;
  @Input() tagType = 'round-tag-noborder';

  ngOnInit() {
  }

  calculateColor(str: string) {
    return this.stringToColorService.stringToColor(this.text, this.applyShade);
  }

}
