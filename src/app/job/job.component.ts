import { Component, OnInit } from '@angular/core';
import { JobService} from '../services/job-service.service';
import {Job} from '../services/job.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) {}
  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }
  accept(job: Job) {
    job.status = 'A';
  }
  decline(job: Job) {
    job.status = 'D';
  }
  hasAnyJobAccepted(): boolean {
    for (let i = 0; i < this.jobs.length ; i++) {
      if (this.jobs[i].status === 'A') {
        return true;
      }
    }
    return false;
  }
}
