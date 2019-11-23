import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

  touchEnd: Observable<MouseEvent> = (fromEvent(document, 'mouseup') as Observable<MouseEvent>);
  touchStart: Observable<MouseEvent> = (fromEvent(document, 'mousedown') as Observable<MouseEvent>);

  constructor() { }

  ngOnInit() {

    zip(this.touchStart, this.touchEnd).subscribe((value: MouseEvent[]) => {
      console.log(value);
      value[0].clientX < value[1].clientX ? console.log('swipe left') : console.log('swipe right');
    });
  }

}
