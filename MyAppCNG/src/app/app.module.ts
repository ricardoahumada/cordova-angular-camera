import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
