import { Component, OnInit } from '@angular/core';
import { CommandRunner } from '../../bizanz-record/command-runner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() { }

  ngOnInit() {
  }

}
