import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxStringToCssColorModule} from "ngx-string-to-css-color";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStringToCssColorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
