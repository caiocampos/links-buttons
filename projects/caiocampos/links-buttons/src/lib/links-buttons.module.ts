import { NgModule } from '@angular/core';
import { LinksButtonsComponent } from './links-buttons/links-buttons.component';
import { LinkComponent } from './link/link.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LinksButtonsComponent, LinkComponent],
  imports: [BrowserModule, FormsModule],
  exports: [LinksButtonsComponent, LinkComponent]
})
export class LinksButtonsModule { }
