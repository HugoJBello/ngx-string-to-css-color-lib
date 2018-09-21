import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { String2HexCodeColor } from './string2HexCodeColor';
@Injectable({
  providedIn: 'root'
})
export class StringToColorService {

  defaultShadePercentage$: BehaviorSubject<any> = new BehaviorSubject('');
  string2HexCodeColor: String2HexCodeColor;
  constructor() {
    this.string2HexCodeColor = new String2HexCodeColor(-0.6);
  }

  changeDefaultPercent(percent) {
    this.defaultShadePercentage$.next(percent);
    this.string2HexCodeColor.defaultShadePercentage = percent;
  }

  stringToColor(str, shadePercentage?) {
    return this.string2HexCodeColor.stringToColor(str, shadePercentage);
    console.log(this.string2HexCodeColor.stringToColor(str, shadePercentage));
  }
}
