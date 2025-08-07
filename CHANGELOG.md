# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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