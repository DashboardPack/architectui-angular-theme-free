import {Component} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  standalone: false,  styles: []
})
export class ControlsComponent {

  heading = 'Form Controls';
  subheading = 'Wide selection of forms controls, using the Bootstrap 5 code base, but built with Vue.';
  icon = 'pe-7s-display1 icon-gradient bg-premium-dark';

  constructor() {
  }


}
