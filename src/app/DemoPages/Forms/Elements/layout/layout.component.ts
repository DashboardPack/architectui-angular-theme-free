import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: false,  styles: []
})
export class LayoutComponent {

  heading = 'Form Layouts';
  subheading = 'Build whatever layout you need with our ArchitectUI framework.';
  icon = 'pe-7s-graph text-success';

  constructor() {
  }


}
