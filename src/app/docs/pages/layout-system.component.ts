import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-layout-system',
  templateUrl: './layout-system.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSystemComponent {
  protected readonly routing = `const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,   // dashboard shell
    children: [
      { path: 'dashboards/analytics', component: AnalyticsComponent },
      // …more dashboard pages
    ],
  },
  {
    path: '',
    component: PagesLayoutComponent,  // minimal auth shell
    children: [
      { path: 'pages/login-boxed', component: LoginBoxedComponent },
    ],
  },
];`;

  protected readonly signals = `// theme-options.ts — shared UI state as signals
@Injectable({ providedIn: 'root' })
export class ThemeOptions {
  sidebarHover = signal(false);
  toggleSidebar = signal(false);
  toggleSidebarMobile = signal(false);
  toggleHeaderMobile = signal(false);
  toggleFixedFooter = signal(false);
}

// Read with x(), write with x.set(...)
this.globals.toggleSidebar.set(!this.globals.toggleSidebar());`;
}
