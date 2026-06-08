# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.4.0] - 2026-06-08

### Angular 22 + TypeScript 6 upgrade

Upgrades the framework to Angular 22 and TypeScript 6, with every other
dependency taken to its latest compatible release. The `ng update`
schematics ran the 21 → 22 migrations. `npm audit` remains clean (0
vulnerabilities). Verified green through `ng build`, `ng lint`, `ng test`,
and headless rendering of the ng-bootstrap and NgRx-driven pages.

### Changed

- **Angular 21.2.15 → 22.0.0** across all `@angular/*` packages (core, cli, build, cdk, compiler-cli, language-service, …)
- **TypeScript 5.9 → 6.0.3** — Angular 22 requires `typescript >=6.0 <6.1`
- `@fortawesome/angular-fontawesome` 4 → 5 (Angular 22 peer)
- `angular-eslint` 21 → 22, `typescript-eslint` → 8.60.1
- The Angular 22 update migration set `ChangeDetectionStrategy.Eager` on existing components to preserve classic change-detection behavior
- Removed the now-invalid `baseUrl` compiler option from `tsconfig.json` (deprecated/removed in TypeScript 6; not needed with `moduleResolution: bundler`)

### Added

- `.npmrc` with `legacy-peer-deps=true` — see the compatibility note below
- Opted out of angular-eslint 22's new `prefer-on-push-component-change-detection` rule in `eslint.config.js`, consistent with the migration's `Eager` strategy

### Compatibility note (temporary)

- **`@ng-bootstrap/ng-bootstrap` (20.0.0) and `@ngrx/store` / `@ngrx/store-devtools` (21.1.0) have not yet published Angular 22 builds** — their latest releases still peer-depend on Angular 21. They are verified working on Angular 22 (build + runtime: tabs, modals, accordions, and the NgRx theme store all render and function), and are installed via legacy peer resolution (`.npmrc`). Bump them to their Angular 22 releases and remove the `.npmrc` flag once available.

## [3.3.0] - 2026-06-01

### Dependency refresh, ESLint 10 flat-config migration, webpack → Vite build system

Brings every dependency up to its latest compatible release, migrates
linting to ESLint 10 (which removed the legacy `.eslintrc.*` format)
using `@angular-eslint` flat config, switches the build system from the
bundled `@angular-devkit/build-angular` to the standalone, Vite/esbuild-only
`@angular/build`, and removes two dead dependencies. `npm audit` is now
clean (0 vulnerabilities). TypeScript stays on 5.9.x because the Angular 21
build pipeline requires `>=5.9 <6.0`.

### Added

- In-app documentation section at `/docs` — a lazy-loaded `DocsModule` with its own layout, grouped sidebar nav, and a dependency-free syntax-highlighting `code-block` component. Pages: Introduction, Getting Started, Folder Structure, Deployment, Layout System, Theming, State & Signals, Components, Charts, Build & Tooling, and Changelog. A "Documentation" link was added to the main sidebar.
- "Upgrade to Pro" link in the sidebar (native Bootstrap pill badge) pointing to the ArchitectUI Angular Pro product page with UTM tracking (`utm_source=architectui-angular-free`, `utm_medium=sidebar`, `utm_campaign=go-pro`).
- `eslint.config.js` flat config (replaces `.eslintrc.json`), built from the `angular-eslint` and `typescript-eslint` umbrella presets
- `@angular/build@^21.2.13` as the project's build/serve/test/i18n builder (Vite + esbuild, no webpack)

### Changed

- **Build system**: all `angular.json` targets switched from `@angular-devkit/build-angular:*` to `@angular/build:*` (`application`, `dev-server`, `extract-i18n`, `karma`). `ng serve` now runs on Vite with no webpack in the dependency tree (~395 packages removed).
- `@angular/*` 21.0.x → 21.2.15; `@angular/cdk` → 21.2.13
- Angular CLI tooling (`@angular/cli`, `@angular/compiler-cli`, `@angular/language-service`) → 21.2.x
- `@ng-bootstrap/ng-bootstrap` 20.0.0-rc.0 → 20.0.0 (stable release)
- Font Awesome packages (`fontawesome-free`, `fontawesome-svg-core`, `free-solid-svg-icons`) → 7.2.0
- `@ngx-loading-bar/*` → 7.0.1, `lodash-es` → 4.18.1, `sass` → 1.100.0
- ESLint 9 → 10.4.1; `@typescript-eslint/*` → 8.60 (now via the `typescript-eslint` umbrella); `@angular-eslint/*` → 21.4.0 (now via the `angular-eslint` umbrella); `karma-jasmine-html-reporter` → 2.2.0; `@types/node` → 25.9.1
- `karma.conf.js`: dropped the `@angular-devkit/build-angular` framework and karma plugin (the build integration is now injected by `@angular/build:karma`)
- `.nvmrc` Node 18 → 22 (Angular 21 and ESLint 10 require Node ≥ 20.19)

### Removed

- `@angular-devkit/build-angular` — replaced by `@angular/build`; this also removes webpack, `webpack-dev-server`, `@angular-devkit/build-webpack`, `sockjs`, and the transitive `uuid` chain
- `chartjs-adapter-luxon` — unused dead dependency (no `luxon` or adapter imports anywhere in `src/`, and its required `luxon` peer was never installed)
- Granular `@angular-eslint/*` and `@typescript-eslint/*` packages, consolidated into the `angular-eslint` / `typescript-eslint` umbrella packages
- `.eslintrc.json` (superseded by `eslint.config.js`)

### Security

- `npm audit` now reports **0 vulnerabilities**. Removing the webpack build pipeline eliminated the moderate advisories GHSA-79cf-xcqc-c78w (`webpack-dev-server <=5.2.3`) and GHSA-w5hq-g745-h8pq (`uuid` via `sockjs`), both of which were only reachable through the legacy dev server.

### Notes

- TypeScript intentionally pinned to `~5.9.3`: `@angular/build@21` requires `typescript >=5.9 <6.0`, so TS 6.0 is not adopted yet

## [3.2.0] - 2026-04-15

### Font Awesome 4 to Font Awesome 7, Bootstrap 5.3.8 consolidation, signals everywhere

This release removes two major sources of legacy weight: the Font
Awesome 4 CSS/font set and the vendored Bootstrap 5.0.2 SCSS copy
that had been shipped alongside npm Bootstrap 5.3.8. Shared UI
state now uses Angular signals throughout, and `npm install` works
again on a fresh clone.

### Added

- `@fortawesome/fontawesome-free@^7.1.0` as a runtime dependency
- `src/typings.d.ts` with typed global for the Bootstrap JS bundle on `window`
- `stylePreprocessorOptions.includePaths: ["node_modules"]` in `angular.json` so SCSS can `@import "bootstrap/scss/..."` directly

### Changed

- **BREAKING (customizations)**: Icon classes migrated from Font Awesome 4 syntax (`fa fa-X`) to Font Awesome 7 (`fa-solid fa-X` / `fa-regular fa-X` / `fa-brands fa-X`). No v4 compatibility shim is loaded; any custom icon usage on top of this template must be updated.
- **BREAKING (customizations)**: `ThemeOptions` properties (`toggleSidebar`, `sidebarHover`, `toggleSidebarMobile`, `toggleHeaderMobile`, `toggleFixedFooter`) are now `signal<boolean>` instead of plain booleans. Reads become `x()`, writes become `x.set(...)`.
- `@ViewChild(BaseChartDirective)` migrated to `viewChild()` / `viewChild.required()` signal queries in chart-boxes3 and line-chart.
- `src/assets/base.scss` rewritten to import Bootstrap 5.3.8 from `node_modules` using the layered ordering (functions → overrides → variables → variables-dark → maps → mixins → utilities → components → utilities/api).
- Header dropdown items (user-box, messages-box, notifications-box) switched from `<a href="#">` to `<button type="button">` for accessibility; `@for` tracking changed to `track item.id`.
- `BaseLayoutComponent.config$` typed as `Observable<ConfigState>` instead of `Observable<any>`; bootstrap tooltip init now uses typed `window.bootstrap` instead of `(window as any).bootstrap`.
- `SidebarComponent.extraParameter` typed as `string | undefined` instead of `any`.
- `SearchBoxComponent.isActive` typed as `boolean` instead of `any`.
- `StandardComponent.startLoading` refactored from 3-level nested `setTimeout` to an async helper with sequential awaits.
- `PieChartComponent`: legacy `Array.apply(null, {length: N})` replaced with `Array.from({length: N}, ...)`.
- `index.html` `<title>` updated from "Angular 11" to "Angular 21".

### Fixed

- `npm install` on a fresh clone (NgRx 20 peer-depended on Angular 20 while the project was on Angular 21; bumped NgRx to 21.1.0). Fixes [#35](https://github.com/DashboardPack/architectui-angular-theme-free/issues/35).
- Icons showcase page (`src/app/DemoPages/Elements/icons/icons.component.html`) now renders actual icons. The FA4 template emitted only `<i class="fa fa-fw">` (fixed-width spacer with no icon name), so every showcase entry was a blank square. 659 of 661 entries now render real FA7 icons with the correct prefix; 2 defunct brand icons (`meanpath`, `tripadvisor`) were removed.
- Bootstrap was being double-rendered into the final CSS bundle. `angular.json` was loading stock Bootstrap 5.3.8 while `base.scss` was simultaneously importing the themed vendored 5.0.2 copy on top.

### Removed

- `font-awesome@4.7.0` dependency
- Vendored Bootstrap 5.0.2 SCSS tree at `src/assets/components/bootstrap5/` (115 files, ~620 KB)
- Duplicate `node_modules/bootstrap/scss/bootstrap.scss` entry from `angular.json` (base.scss now owns Bootstrap loading)
- Orphan `src/assets/components/icons/fontawesome/_fontawesome.scss` partial (unreferenced after FA4 removal)
- Unused `simple-dashboard.component.ts`, `test-simple.component.ts`, `test.module.ts` (no importers)
- No-op `animations: []` declarations + associated unused `@angular/animations` imports
- Empty `ngOnInit() {}` stubs from `FooterComponent`, `MessagesBoxComponent`, `NotificationsBoxComponent`, `UserBoxComponent`, `LogoComponent`, `PagesLayoutComponent`

### Dependencies Updated

- `@fortawesome/fontawesome-free`: `^7.0.0` (devDep) → `^7.1.0` (runtime dep)
- `@ngrx/store`: `^20.1.0` → `^21.1.0`
- `@ngrx/store-devtools`: `^20.1.0` → `^21.1.0`
- `ng2-charts`: `^8.0.0` → `^10.0.0`
- `@types/jasmine`: `^5.1.13` → `^6.0.0`
- `@types/node`: `^24.10.1` → `^25.6.0`
- `jasmine-core`: `~5.9.0` → `~6.2.0`
- `@typescript-eslint/*`: `^8.48.1` → `^8.58.2`

### Migration Notes

- If you've added custom icons with `fa fa-X`, rename them to `fa-solid fa-X`; for old `-o` outlined variants, use `fa-regular fa-X`.
- If your code reads or writes `ThemeOptions.toggleSidebar` etc. directly, change reads to `.toggleSidebar()` and writes to `.toggleSidebar.set(value)`.
- If you've vendored anything from `src/assets/components/bootstrap5/`, replace those imports with `bootstrap/scss/...` paths; theme variable overrides in `src/assets/themes/blue-alt/_variables.scss` are unchanged and now apply to Bootstrap 5.3.8.
- TypeScript stays at 5.9.3 and ESLint at 9.x — Angular 21 build tooling does not yet accept TS 6 or ESLint 10.

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## [3.1.0] - 2025-12-02

### Major Version Release - Angular 21 with Zoneless Architecture

This release upgrades to Angular 21 with full zoneless support, resulting in significantly smaller bundle sizes and improved performance.

### Added
- **Zoneless Angular 21** - Full zoneless architecture without zone.js dependency
- Angular Signals for reactive state updates in UI components
- `afterNextRender()` API for DOM operations replacing setTimeout
- Modern TypeScript 5.9.3 support
- Updated ng-bootstrap 20.0.0 with Angular 21 compatibility

### Changed
- **BREAKING**: Removed zone.js dependency (fully zoneless)
- **BREAKING**: Components using setTimeout for DOM operations now use `afterNextRender()`
- **BREAKING**: Reactive UI state now uses Angular Signals (`signal()`)
- Updated Angular to 21.0.2
- Updated TypeScript to 5.9.3
- Updated Bootstrap to 5.3.8
- Updated Chart.js to 4.5.1
- Updated all @angular-eslint packages to 21.0.1
- Updated @fortawesome packages to 7.x
- Polyfills bundle reduced from ~91KB to ~1.6KB (98% reduction)

### Fixed
- Fixed duplicate ng-template names in modals component
- Updated test files to work without zone.js
- Fixed Chart.js controller registration in unit tests

### Removed
- Removed zone.js dependency (no longer needed with zoneless Angular)
- Removed `provideZoneChangeDetection()` from bootstrap
- Removed obsolete Protractor e2e test configuration
- Removed deprecated TSLint configuration file
- Removed `.angular/cache` from git tracking

### Technical Improvements
- Significantly improved application startup time
- Reduced memory footprint without zone.js overhead
- Better change detection performance with signals
- Cleaner component lifecycle with `afterNextRender()`

### Dependencies Updated
- `@angular/*` packages: `^20.1.6` → `^21.0.2`
- `@ng-bootstrap/ng-bootstrap`: `^19.0.1` → `^20.0.0-rc.0`
- `typescript`: `^5.8.3` → `^5.9.3`
- `bootstrap`: `^5.3.7` → `^5.3.8`
- `chart.js`: `^4.5.0` → `^4.5.1`
- `@fortawesome/*`: Updated to `^7.x`
- `@types/node`: Updated to `^24.10.1`
- `eslint`: Updated to `^9.39.1`
- Removed: `zone.js` (no longer required)

### Migration Notes
- This version requires Angular 21 and Node.js 18+
- Applications are now fully zoneless - no zone.js patches
- Components using `setTimeout` for DOM init should use `afterNextRender()`
- Use Angular Signals for reactive state that needs automatic change detection

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## [2.0.0] - 2025-08-06

### Major Version Release - Angular 20 Migration

This release represents a complete modernization of the ArchitectUI Angular template with significant framework and dependency upgrades.

### Added
- Angular 20.1.4 framework upgrade
- Bootstrap 5.3.7 integration with custom components
- Chart.js v4.5.0 with ng2-charts v8.0.0 support
- NgRx Store for centralized state management
- ESLint integration replacing deprecated TSLint
- TypeScript 5.8.3 support
- Modern chart components with interactive features
- Enhanced responsive design with Bootstrap 5
- Professional footer with updated copyright (2025)

### Changed
- **BREAKING**: Migrated from Angular 11 to Angular 20.1.4
- **BREAKING**: Upgraded from Bootstrap 4.6 to Bootstrap 5.3.7
- **BREAKING**: Replaced Angular-Redux with NgRx Store
- **BREAKING**: Updated Chart.js from v2 to v4 with new API
- **BREAKING**: Migrated from TSLint to ESLint
- Modernized all chart components with new ng2-charts v8 API
- Updated component templates to use Bootstrap 5 classes
- Improved tab component with proper justified alignment options
- Enhanced UI components with modern Bootstrap 5 styling
- Updated build process and development tools
- Improved code organization and module structure

### Fixed
- Fixed justified tabs center and end alignment functionality
- Resolved chart compatibility issues with modern Angular
- Fixed component styling inconsistencies
- Corrected Bootstrap 5 class usage throughout the application
- Fixed state management implementation
- Resolved build and compilation issues
- Fixed responsive design issues

### Removed
- Removed Perfect Scrollbar dependency (incompatible with Angular 20)
- Removed deprecated Angular-Redux implementation
- Removed TSLint configuration and dependencies
- Removed Angular Material button references (replaced with Bootstrap)
- Removed legacy chart component implementations
- Cleaned up development console.log statements
- Removed temporary development files and scripts

### Technical Improvements
- Updated package.json with modern dependency versions
- Improved build configuration for Angular 20
- Enhanced TypeScript configuration for better type safety
- Optimized bundle size and performance
- Updated development and build scripts
- Improved code linting and quality checks
- Better error handling and component lifecycle management

### Dependencies Updated
- `@angular/*` packages: `^11.2.2` → `^20.1.4`
- `bootstrap`: `^4.6.0` → `^5.3.7`
- `chart.js`: `^2.9.4` → `^4.5.0`
- `ng2-charts`: `^2.4.3` → `^8.0.0`
- `typescript`: `^4.1.5` → `^5.8.3`
- `@ngrx/store`: Added `^18.1.0`
- `eslint`: Added `^8.57.0`
- Many other dependencies updated to their latest compatible versions

### Migration Notes
- This version requires Angular 20 and Node.js 18+
- Bootstrap 5 migration may require template updates for custom implementations
- Chart components now use the modern Chart.js v4 API
- State management has been restructured with NgRx

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## [1.0.0] - 2021-03-01

### Initial Release
- Angular 11.2.2 framework
- Bootstrap 4.6.0 styling
- Chart.js v2 integration
- Angular-Redux state management
- TSLint code quality
- Basic admin dashboard components
- User authentication pages
- Responsive layout system