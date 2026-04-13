import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipe/status.pipe';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    ObsComObjetoComponent,
    ObsComArrayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
