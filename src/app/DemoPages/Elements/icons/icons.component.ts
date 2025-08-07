import {Component} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  standalone: false,  styles: []
})
export class IconsComponent {

  heading = 'Icons';
  subheading = 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.';
  icon = 'pe-7s-phone icon-gradient bg-night-fade';

  constructor() {
  }


}
