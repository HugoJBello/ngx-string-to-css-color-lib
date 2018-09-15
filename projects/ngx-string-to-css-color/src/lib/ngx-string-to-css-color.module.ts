import { NgModule, ModuleWithProviders} from '@angular/core';
import { NgxStringToCssColorComponent } from './ngx-string-to-css-color.component';
import { StringToColorService } from "./string-to-color.service";
import { ColorBackgroundFromTextDirective } from './background-color-from-text/color-background-from-text.directive';
import { TagWithBackgroundFromTextComponent } from './background-color-from-text/tag-with-background-from-text/tag-with-background-from-text.component';

@NgModule({
  imports: [
  ],
  declarations: [NgxStringToCssColorComponent, ColorBackgroundFromTextDirective, TagWithBackgroundFromTextComponent],
  exports: [NgxStringToCssColorComponent, ColorBackgroundFromTextDirective, TagWithBackgroundFromTextComponent],
})
export class NgxStringToCssColorModule {
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: NgxStringToCssColorModule,
    providers: [StringToColorService]
  };
}
}
