import { Component, OnInit } from '@angular/core';
import { StringToColorService } from 'projects/ngx-string-to-css-color/src/public_api';
import {String2HexCodeColor} from 'string-to-hex-code-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-string-to-css-color-app';
  textSample = ['Some text', 'Another text', 'Piece of text', 'More txt', 'The same', 'Yet Another'];
  text = 'add text';
  codeStringToColor: string;
  codeStringToColorShade1: string;
  codeStringToColorShade2: string;
  codeStringToColorShade3: string;
  codeStringToColorShade4: string;

  codeTagDefault: string;
  codeTagShade1: string;
  codeTagShade2: string;
  codeTagShade3: string;
  codeTagShade4: string;


  constructor(public stringToColorService: StringToColorService) { 
  }

  ngOnInit() {
    this.onChangeText();
    const str = new String2HexCodeColor(0.2);
    console.log(str.stringToColor('aaa'));

  }

  onChangeText() {
    this.codeStringToColor = 'this.stringToColorService.stringToColor("' + this.text + '")';
    this.codeStringToColorShade1 = 'this.stringToColorService.stringToColor("' + this.text + '",\'-0.5\')';
    this.codeStringToColorShade2 = 'this.stringToColorService.stringToColor("' + this.text + '",\'-0.2\')';
    this.codeStringToColorShade3 = 'this.stringToColorService.stringToColor("' + this.text + '",\'0\')';
    this.codeStringToColorShade4 = 'this.stringToColorService.stringToColor("' + this.text + '",\'0.2\')';
    this.codeTagDefault = '<tag-with-background-from-text [text]="\'' + this.text + '\'"></tag-with-background-from-text>';
    this.codeTagShade1 = '<tag-with-background-from-text [text]="\'' + this.text + '\'"'
      + ' applyShade="-0.5"></tag-with-background-from-text>';
    this.codeTagShade2 = '<tag-with-background-from-text [text]="\'' + this.text + '\'"'
      + ' applyShade="-0.2"></tag-with-background-from-text>';
    this.codeTagShade3 = '<tag-with-background-from-text [text]="\'' + this.text + '\'"'
      + 'applyShade="0"></tag-with-background-from-text>';
    this.codeTagShade4 = '<tag-with-background-from-text [text]="\'' + this.text + '\'"'
      + ' applyShade="0.2"></tag-with-background-from-text>';

  }
}
