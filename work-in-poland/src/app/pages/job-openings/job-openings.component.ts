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

  jobFiltering(filterValue) {
    this.jobCardList.filter(jobCard => {
      const paymentPerMonth = jobCard.employer.paymentPerMonth;
      const paymentPerMonth1 = paymentPerMonth.split(/[\-\/]/);
      const minPayment = paymentPerMonth[0].trim();
      const maxPayment = paymentPerMonth[1].trim();
      console.log(minPayment);
      console.log(maxPayment);
      console.log(filterValue);
    });
  }

  // TODO to realize this method

  searchByWords(value) {
    // console.log(value);
    //
    // this.jobCardList.forEach((item: JobCard) => {
    // })
  }

}
