import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styles: []
})
export class ControlsComponent implements OnInit {

  heading = 'Form Controls';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-display1 icon-gradient bg-premium-dark';

  constructor() {
  }

  ngOnInit() {
  }

}
