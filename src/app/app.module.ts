import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgxStringToCssColorModule} from "ngx-string-to-css-color";
import { NgxStringToCssColorModule} from '../../projects/ngx-string-to-css-color/src/lib/ngx-string-to-css-color.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxStringToCssColorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
