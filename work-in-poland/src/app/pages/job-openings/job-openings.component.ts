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

  constructor() {
  }

  ngOnInit() {
  }

  splitSalaryRange(salaryRange: string): string[] {
    // TODO сделать так что бы в массив не попадал лишний элемент "-"
    const rangeArray  = salaryRange.split(/[\s\-:]/);

    // TODO возвращаю только чилса без тире
    return [rangeArray[0], rangeArray[2]];
  }

  filterBySalary(filterValue) {
    this.jobCardList = this.jobCardList.filter(jobCard => {
      const paymentPerMonth = jobCard.employer.paymentPerMonth;
      const rangePaymentPerMonth = this.splitSalaryRange(paymentPerMonth);
      const rangeFilterValue = this.splitSalaryRange(filterValue);

      return rangePaymentPerMonth[0] >= rangeFilterValue[0] && rangePaymentPerMonth[1] <= rangeFilterValue[1];
    });
  }

  jobFiltering(filterValue): void {
    this.jobCardList = jobCardList;

    if (filterValue.salaryInMonth) {
      this.filterBySalary(filterValue.salaryInMonth);
    }
  }

  // TODO to realize this method

  searchByWords(value) {
    // console.log(value);
    //
    // this.jobCardList.forEach((item: JobCard) => {
    // })
  }

}
