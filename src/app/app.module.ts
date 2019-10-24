import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LinksButtonsModule} from '@campos/links-buttons';
// import {LinksButtonsModule} from '../../projects/campos/links-buttons/src/lib/links-buttons.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LinksButtonsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
