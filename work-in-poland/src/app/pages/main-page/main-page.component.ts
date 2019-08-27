import { Component, OnInit } from '@angular/core';
import { categories } from '../main-page/categoties-config';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  categories = categories;
  constructor() {
  }

  ngOnInit() {
  }

}
