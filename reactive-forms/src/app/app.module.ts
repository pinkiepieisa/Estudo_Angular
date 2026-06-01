import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorAssincronoComponent } from './EXEMPLOS/validator-assincrono/validator-assincrono.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group.component';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidatorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
