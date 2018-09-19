import { Component, OnInit } from '@angular/core';
import {StringToColorService} from './string-to-color.service';

@Component({
  selector: 'lib-ngx-string-to-css-color',
  template: `
    <p>
      ngx-string-to-css-color works!
    </p>
  `,
  styles: []
})
export class NgxStringToCssColorComponent implements OnInit {

  constructor(public stringToColorService: StringToColorService) { }

  ngOnInit() {
  }

}
