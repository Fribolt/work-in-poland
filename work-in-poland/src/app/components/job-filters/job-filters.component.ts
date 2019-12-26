import { Component, Input, OnInit } from '@angular/core';
import { JobCard } from '../../models/job-card.model';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.scss']
})
export class JobFiltersComponent implements OnInit {

  @Input()
  jobCardList: JobCard[];

  constructor() { }

  ngOnInit() {
  }

}
