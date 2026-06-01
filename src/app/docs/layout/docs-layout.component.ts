import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DOCS_NAV } from '../docs-nav';

@Component({
  selector: 'app-docs-layout',
  templateUrl: './docs-layout.component.html',
  styleUrls: ['./docs-layout.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsLayoutComponent {
  protected readonly nav = DOCS_NAV;
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
