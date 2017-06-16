import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdIconModule, MdListModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule, MdOptionModule, MdSelectModule, MdProgressBarModule,
        MdProgressSpinnerModule, MdToolbarModule, MdGridListModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JobService } from './services/job-service.service';
import { JobComponent } from './job/job.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectedDatesPipe } from './calendar/selected-dates.pipe';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent,  data: {title: 'My Availability'}},
  { path: 'jobs', component: JobComponent,  data: {title: 'Jobs'} },
  { path: '', redirectTo: '/jobs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    JobComponent,
    CalendarComponent,
    SelectedDatesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, MdToolbarModule,
    MdButtonModule, MdCheckboxModule,
    MdIconModule, MdListModule, MdCardModule, MdOptionModule, MdSelectModule,
    MdProgressBarModule, MdProgressSpinnerModule, MdGridListModule,
    MdMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title;
  constructor(private router: Router) {
    this.title = 'TESt';
  }
}
