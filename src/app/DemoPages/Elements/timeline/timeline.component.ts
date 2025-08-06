import {Component} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  standalone: false,  styles: []
})
export class TimelineComponent {

  heading = 'Timelines';
  subheading = 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.';
  icon = 'pe-7s-light icon-gradient bg-malibu-beach';

  constructor() {
  }


}
