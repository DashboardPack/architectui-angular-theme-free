import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tables-main',
  templateUrl: './tables-main.component.html'
})
export class TablesMainComponent implements OnInit {

  heading = 'Bootstrap 4 Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor() {
  }

  ngOnInit() {
  }

}
