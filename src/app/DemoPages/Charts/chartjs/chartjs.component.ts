import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: []
})
export class ChartjsComponent implements OnInit {
  heading = 'ChartJS';
  subheading = 'Huge selection of charts created with the Vue ChartJS Plugin';
  icon = 'pe-7s-bandaid icon-gradient bg-amy-crisp';

  constructor() {
  }

  ngOnInit() {
  }

}
