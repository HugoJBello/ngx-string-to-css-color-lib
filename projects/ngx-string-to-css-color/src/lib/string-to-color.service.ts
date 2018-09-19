import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringToColorService {

  defaultShadePercentage = -0.6;
  defaultShadePercentage$:BehaviorSubject<any> = new BehaviorSubject('');
  constructor() { }
  changeDefaultPercent(percent){
    this.defaultShadePercentage$.next(percent);
  }
  shadeColor2(color, percent) {
    if (!percent) {
      percent = this.defaultShadePercentage;
    }
    const f =parseInt(color.slice(1),16);
    const t=percent<0?0:255;
    const p=percent<0?percent*-1:percent;
    const R=f>>16;
    const G=f>>8&0x00FF;
    const B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

  stringToColour(str, shadePercentage?) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return this.shadeColor2(colour, shadePercentage);
  }

}
