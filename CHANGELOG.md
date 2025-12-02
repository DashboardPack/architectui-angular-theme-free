# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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