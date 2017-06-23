import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Job} from './job.component';

@Injectable()
export class JobService {

  constructor(private http: Http) { }

  getJobs(): Observable<Job[]> {
   /* this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=53.3480029,-6.4622256&destinations=' + 'Tallaght')
      .map((res1: Response) => {
        console.log(res1.json());
      });*/
    return this.http.get('./assets/jobs.json')
      .map(this.extractData);
  }
  extractData(res: Response) {
      const jobs: Job[] = res.json();
      return jobs;
  }
}
