import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  standalone: false,  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class IconsComponent {

  heading = 'Icons';
  subheading = 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.';
  icon = 'pe-7s-phone icon-gradient bg-night-fade';

  constructor() {
  }


}
