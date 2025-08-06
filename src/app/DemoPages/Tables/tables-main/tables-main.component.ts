import {Component} from '@angular/core';

@Component({
  selector: 'app-tables-main',
  templateUrl: './tables-main.component.html',
  standalone: false
})
export class TablesMainComponent {

  heading = 'Bootstrap 5 Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor() {
  }


}
