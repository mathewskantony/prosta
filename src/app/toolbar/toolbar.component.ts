import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCalendar() {
    this.router.navigate(['/calendar']);
  }
  onJobs() {
    this.router.navigate(['/jobs']);
  }
}
