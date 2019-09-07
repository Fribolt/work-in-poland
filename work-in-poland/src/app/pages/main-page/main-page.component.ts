import { Component, OnInit } from '@angular/core';
import { categories } from './categoties.config';
import { typeOfJobs } from './type-of-jobs.config';
import { occupation } from './occupation.config';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  categories = categories;
  typeOfJobs = typeOfJobs;
  occupation = occupation;

  constructor() {
  }

  ngOnInit() {
  }

}
