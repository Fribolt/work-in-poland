import { Component, OnInit } from '@angular/core';
import { jobCardList } from './job-card-list';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {

  jobCardList = jobCardList;

  constructor() { }

  ngOnInit() {
  }

}
