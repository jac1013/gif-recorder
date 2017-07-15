import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  }
  title = `App works !`;

  constructor() { }

  ngOnInit() {
  }

}
//delete later.
