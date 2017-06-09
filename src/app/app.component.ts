import {Component, OnInit} from '@angular/core';
import { JobService} from './services/job-service.service';
import {Job} from './services/job.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) {}
  ngOnInit() { this.getJobs(); }

  getJobs() {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }
}
