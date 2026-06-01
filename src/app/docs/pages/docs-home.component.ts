import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-home',
  templateUrl: './docs-home.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsHomeComponent {
  protected readonly quickStart = `npm install
ng serve        # dev server (Vite) at http://localhost:4200
ng build        # production build`;
}
