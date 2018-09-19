import { Component, OnInit} from '@angular/core';
import { StringToColorService} from 'ngx-string-to-css-color';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngx-string-to-css-color-app';
  textSample = ['Some text', 'Another text', 'Piece of text', 'More txt', 'The same', 'Yet Another'];
  text: string ="add text";
  codeStringToColor: string;
  codeStringToColorShade1: string;
  codeStringToColorShade2: string;
  codeStringToColorShade3: string;
  codeStringToColorShade4: string;

  codeTagDefault:string;
  codeTagShade1:string;

  constructor (public stringToColorService : StringToColorService) {}

  ngOnInit(){
    const subscription = this.stringToColorService.defaultShadePercentage$.subscribe( (percentage) => {
      console.log (percentage);
    });
    this.onChangeText();
    this.stringToColorService.changeDefaultPercent(4);
  }

  onChangeText(){
    this.codeStringToColor = 'this.stringToColorService.stringToColour("' + this.text + '")';
    this.codeStringToColorShade1 = 'this.stringToColorService.stringToColour("' + this.text + '",\'-0.5\')';
    this.codeStringToColorShade2 = 'this.stringToColorService.stringToColour("' + this.text + '",\'-0.2\')';
    this.codeStringToColorShade3 = 'this.stringToColorService.stringToColour("' + this.text + '",\'0\')';
    this.codeStringToColorShade4 = 'this.stringToColorService.stringToColour("' + this.text + '",\'0.2\')';

  }
}
