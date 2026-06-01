import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-theming',
  templateUrl: './theming.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemingComponent {
  protected readonly scssTree = `src/
├── styles.scss              # global styles entry
└── assets/
    ├── base.scss            # Bootstrap 5.3.8 import + layered overrides
    ├── layout/              # layout-specific SCSS
    ├── components/          # Bootstrap component overrides
    └── themes/
        ├── _layout-variables.scss
        └── blue-alt/        # an alternate theme variant`;

  protected readonly runtimeTheme = `// Inject the service and update header / sidebar themes at runtime
constructor(private config: ConfigService) {}

applyTheme(): void {
  this.config.updateConfig({
    headerTheme: 'bg-primary',
    sidebarTheme: 'bg-success',
  });
}`;
}
