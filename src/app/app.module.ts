import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdIconModule, MdListModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule, MdRadioModule, MdSliderModule, MdProgressBarModule
  , MdProgressSpinnerModule, MdToolbarModule } from '@angular/material';
import {MdMenuModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JobService } from './services/job-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, MdToolbarModule,
    MdButtonModule, MdCheckboxModule,
    MdIconModule, MdListModule, MdCardModule, MdRadioModule, MdSliderModule,
    MdProgressBarModule, MdProgressSpinnerModule,
    MdMenuModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
