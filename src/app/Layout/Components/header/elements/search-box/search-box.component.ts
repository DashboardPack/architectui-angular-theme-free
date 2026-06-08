import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SearchBoxComponent {
  public isActive = false;
}
