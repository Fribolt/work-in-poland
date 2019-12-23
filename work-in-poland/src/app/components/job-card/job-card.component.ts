import { Component, Input, OnInit } from '@angular/core';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input()
  jobCard: JobCard;

  constructor() {
  }

  ngOnInit() {
  }

}
