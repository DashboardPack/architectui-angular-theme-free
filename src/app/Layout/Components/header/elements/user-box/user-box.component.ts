import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeOptions } from '../../../../../theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserBoxComponent {
  constructor(public globals: ThemeOptions) {}
}
