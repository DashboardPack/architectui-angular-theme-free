import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Release {
  version: string;
  date: string;
  summary: string;
  changes: string[];
}

@Component({
  selector: 'app-docs-changelog',
  templateUrl: './changelog.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogComponent {
  protected readonly releases: Release[] = [
    {
      version: '3.4.0',
      date: '2026-06-08',
      summary: 'Angular 22 + TypeScript 6 upgrade.',
      changes: [
        'Upgraded the framework from Angular 21 to 22.0.0 and TypeScript from 5.9 to 6.0 (via the ng update 21 → 22 migrations)',
        '@fortawesome/angular-fontawesome 4 → 5, angular-eslint 21 → 22',
        'npm audit remains clean (0 vulnerabilities)',
        'ng-bootstrap and NgRx have no Angular 22 build yet — verified working and installed via legacy-peer-deps until their v22 releases land',
      ],
    },
    {
      version: '3.3.0',
      date: '2026-06-01',
      summary: 'Dependency refresh, ESLint 10 flat config, and a webpack → Vite build system.',
      changes: [
        'Build system swapped from @angular-devkit/build-angular to the standalone @angular/build (Vite 7 + esbuild) — no webpack in the dependency tree',
        'npm audit is clean (0 vulnerabilities)',
        'ESLint 9 → 10 with a migration to flat config (eslint.config.js)',
        'Every dependency refreshed to its latest compatible release (Angular 21.2.15, ng-bootstrap 20, Font Awesome 7.2, Sass 1.100, …)',
        'Removed the unused chartjs-adapter-luxon dependency',
        'Added this in-app documentation section',
      ],
    },
    {
      version: '3.2.0',
      date: '2026-04-15',
      summary: 'Font Awesome 7, Bootstrap 5.3.8 consolidation, and signals everywhere.',
      changes: [
        'Migrated icons from Font Awesome 4 to Font Awesome 7 (no compatibility shim)',
        'Removed the vendored Bootstrap 5.0.2 SCSS in favor of npm Bootstrap 5.3.8 with theme overrides',
        'Shared UI state and chart ViewChild queries migrated to Angular signals',
        'Accessibility: header dropdown items are now <button> elements',
      ],
    },
  ];
}
