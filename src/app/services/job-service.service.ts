import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Job} from './job.component';

@Injectable()
export class JobService {

  constructor(private http: Http) { }

  getJobs(): Observable<Job[]> {
    return this.http.get('./assets/jobs.json')
      .map(this.extractData);
  }
  private extractData(res: Response) {
      console.log(res.json())
      return res.json() || { };
  }
}
