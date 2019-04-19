import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {

  heading = 'Pagination';
  subheading = 'Basic and dynamic pagination for use in your next awesome application.';
  icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';

  page = 3;
  page3 = 3;
  page4 = 4;

  currentPage = 4;

  page2 = 5;

  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
