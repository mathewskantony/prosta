import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdIconModule, MdListModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule, MdRadioModule, MdSliderModule, MdProgressBarModule
  , MdProgressSpinnerModule, MdToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, MdToolbarModule,
    MdButtonModule, MdCheckboxModule,
    MdIconModule, MdListModule, MdCardModule, MdRadioModule, MdSliderModule,
    MdProgressBarModule, MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
