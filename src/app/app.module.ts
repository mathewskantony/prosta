import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdIconModule, MdListModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule, MdRadioModule, MdSliderModule, MdProgressBarModule,
        MdProgressSpinnerModule, MdToolbarModule, MdGridListModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JobService } from './services/job-service.service';
import { JobComponent } from './job/job.component';
import { CalendarComponent } from './calendar/calendar.component';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'jobs', component: JobComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    JobComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, MdToolbarModule,
    MdButtonModule, MdCheckboxModule,
    MdIconModule, MdListModule, MdCardModule, MdRadioModule, MdSliderModule,
    MdProgressBarModule, MdProgressSpinnerModule, MdGridListModule,
    MdMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
