import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  standalone: false,  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class DropdownsComponent {

  heading = 'Dropdowns';
  subheading = 'Multiple styles, actions and effects are available for the ArchutectUI dropdown buttons.';
  icon = 'pe-7s-umbrella icon-gradient bg-sunny-morning';

  constructor() {
  }


}
