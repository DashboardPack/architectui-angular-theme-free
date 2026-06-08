import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AppComponent {
  title = 'ArchitectUI - Angular 20 Bootstrap 5 & Material Design Admin Dashboard Template';
}
