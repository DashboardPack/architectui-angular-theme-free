import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styles: []
})
export class ListGroupsComponent implements OnInit {

  heading = 'List Groups';
  subheading = 'These can be used with other components and elements to create stunning and unique new elements for your UIs.';
  icon = 'pe-7s-paint icon-gradient bg-sunny-morning';

  constructor() {
  }

  ngOnInit() {
  }

}
