import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-folder-structure',
  templateUrl: './folder-structure.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderStructureComponent {
  protected readonly tree = `src/
├── app/
│   ├── app.module.ts            # Root module (layout + NgRx store setup)
│   ├── app-routing.module.ts    # Top-level routes (BaseLayout / PagesLayout / docs)
│   ├── components.barrel.ts     # Re-exports page components for the router
│   ├── theme-options.ts         # Shared UI state (signals)
│   ├── *.module.ts              # Feature modules: dashboards, elements,
│   │                            #   components, charts, forms, tables,
│   │                            #   user-pages, widgets, shared
│   ├── Layout/                  # Layout shells
│   │   ├── base-layout/         #   Dashboard shell (header, sidebar, footer)
│   │   ├── pages-layout/        #   Minimal shell for auth pages
│   │   └── Components/          #   header, sidebar, footer, page-title
│   ├── DemoPages/               # Feature page components
│   │   ├── Dashboards/  Elements/  Components/
│   │   ├── Charts/      Forms/     Tables/
│   │   └── Widgets/     UserPages/
│   ├── ThemeOptions/            # NgRx store (config state/reducer/actions)
│   │   └── store/
│   └── docs/                    # This documentation section (lazy-loaded)
│       ├── layout/              #   docs shell + sidebar nav
│       ├── code-block/          #   syntax-highlighted code component
│       └── pages/               #   individual doc pages
├── assets/                      # Styles (SCSS), images, themes
├── styles.scss                  # Global styles entry
├── main.ts                      # Bootstrap entry
└── index.html`;
}
