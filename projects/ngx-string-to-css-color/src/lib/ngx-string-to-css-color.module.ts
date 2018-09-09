import { NgModule, ModuleWithProviders} from '@angular/core';
import { NgxStringToCssColorComponent } from './ngx-string-to-css-color.component';
import { StringToColorService } from "./string-to-color.service";
import { ColorBackgroundFromTextDirective } from './background-color-from-text/color-background-from-text.directive';

@NgModule({
  imports: [
  ],
  declarations: [NgxStringToCssColorComponent, ColorBackgroundFromTextDirective],
  exports: [NgxStringToCssColorComponent, ColorBackgroundFromTextDirective],
})
export class NgxStringToCssColorModule {
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: NgxStringToCssColorModule,
    providers: [StringToColorService]
  };
}
}
