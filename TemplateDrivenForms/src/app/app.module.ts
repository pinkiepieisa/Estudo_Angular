import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './elements/textarea/textarea/textarea.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { SubmitComponent } from './elements/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
