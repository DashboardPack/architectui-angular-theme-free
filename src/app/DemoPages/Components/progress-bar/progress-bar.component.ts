import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false})
export class ProgressBarComponent {

  height = '20px';

  heading = 'Progress Bar';
  subheading = 'You can use the progress bars on their own or in combination with other widgets.';
  icon = 'pe-7s-filter icon-gradient bg-grow-early';

  constructor() {
  }


}
