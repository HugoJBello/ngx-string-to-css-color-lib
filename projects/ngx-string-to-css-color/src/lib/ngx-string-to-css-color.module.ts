import { NgModule, ModuleWithProviders} from '@angular/core';
import { NgxStringToCssColorComponent } from './ngx-string-to-css-color.component';
import { StringToColorService } from "./string-to-color.service";

@NgModule({
  imports: [
  ],
  declarations: [NgxStringToCssColorComponent],
  exports: [NgxStringToCssColorComponent],
})
export class NgxStringToCssColorModule {
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: NgxStringToCssColorModule,
    providers: [StringToColorService]
  };
}
}
