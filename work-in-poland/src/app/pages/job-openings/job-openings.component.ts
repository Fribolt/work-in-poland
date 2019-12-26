import { Component, OnInit } from '@angular/core';
import { jobCardList } from './job-card-list';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {

  searchValue: string;
  jobCardList = jobCardList;

  constructor() { }

  ngOnInit() {
  }

  // TODO to realize this method

  searchByWords(value) {
    // console.log(value);
    //
    // this.jobCardList.forEach((item: JobCard) => {
    // })
  }

}
