import { Component, OnInit} from '@angular/core';
import { StringToColorService} from "ngx-string-to-css-color";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngx-string-to-css-color-app';
  constructor (public stringToColorService : StringToColorService) {}

  ngOnInit(){
    console.log(this.stringToColorService.stringToColour("blabla"))
  }
}
