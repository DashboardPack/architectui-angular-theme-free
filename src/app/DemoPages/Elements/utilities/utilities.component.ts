import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styles: []
})
export class UtilitiesComponent implements OnInit {

  heading = 'Utilities';
  subheading = 'These are helpers that speed up the dev time for various components and effects.';
  icon = 'pe-7s-wristwatch icon-gradient bg-deep-blue';

  constructor() {
  }

  ngOnInit() {
  }

}
