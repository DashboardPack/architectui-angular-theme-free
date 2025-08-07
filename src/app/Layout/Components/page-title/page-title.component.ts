import {Component, Input} from '@angular/core';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  standalone: false
})
export class PageTitleComponent {

  faStar = faStar;
  faPlus = faPlus;

  @Input() heading: string = '';
  @Input() subheading: string = '';
  @Input() icon: string = '';

}
