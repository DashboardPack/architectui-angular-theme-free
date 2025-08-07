import {Component} from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  standalone: false,  styles: []
})
export class ChartjsComponent {
  heading = 'ChartJS';
  subheading = 'Huge selection of charts created with Chart.js and ng2-charts';
  icon = 'pe-7s-bandaid icon-gradient bg-amy-crisp';

  constructor() {
  }


}
