import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  isLoggedIn: boolean;
  constructor(private http: Http) { }
  logn (userName, password): Observable<boolean>  {
      if (userName === 'test' && password === 'test') {
        this.isLoggedIn = true;
        return Observable.of(true);
      } else {
        this.isLoggedIn = false;
        return Observable.of(false);
      }
  }
}
