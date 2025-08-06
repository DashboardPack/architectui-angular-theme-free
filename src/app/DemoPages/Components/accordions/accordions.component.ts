import {Component} from '@angular/core';
// import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  standalone: false})
export class AccordionsComponent {

  heading = 'Accordions';
  subheading = 'Accordions represent collapsable component with extended functionality.';
  icon = 'pe-7s-diamond icon-gradient bg-warm-flame';

  public isCollapsed = false;

  public beforeChange($event: any) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };

  constructor() {
  }


}
