import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipe/status.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
