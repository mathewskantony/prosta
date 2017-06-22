import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  loginFailed = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router, private loginService: LoginService,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    // reset login status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loginService.logn(this.model.username, this.model.password).subscribe(isSuccess => {
      if (isSuccess) {
        this.router.navigate(['/jobs']);
      } else {
        const config = new MdSnackBarConfig();
        config.politeness = 'assertive';
        config.duration = 5000;
        const snackBarRef = this.snackBar.open('Login Failed.', '', config);
      }
    });
  }
}