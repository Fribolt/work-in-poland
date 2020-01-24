import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobCard } from '../../models/job-card.model';
import { FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.scss']
})
export class JobFiltersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  jobCardList: JobCard[];

  @Output()
  jobFiltering = new EventEmitter();

  jobFiltersForm = this.formBuilder.group({
    salaryInMonth: null,
    condition: this.formBuilder.group({
      languageRequired: null,
      workExperience: null,
      pidFood: null,
    })
  });

  ngOnInit() {
    // this.jobFiltersForm.valueChanges.subscribe(value => console.log(value));
  }
}
