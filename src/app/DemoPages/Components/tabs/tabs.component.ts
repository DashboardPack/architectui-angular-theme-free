import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: false})
export class TabsComponent {

  heading = 'Tabs';
  subheading = 'Tabs are used to split content between multiple sections. Wide variety available.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  currentJustify = 'start';
  currentJustify2 = 'center';
  currentJustify3 = 'start';

  currentOrientation = 'horizontal';

  constructor() {
  }


}
