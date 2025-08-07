# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-08-07

### 🎉 Major Release - Enhanced UI & Deployment Ready

This major release brings significant UI improvements, enhanced header components, production-ready deployment configurations, and complete Bootstrap 5 integration.

### ✨ Added

#### **Enhanced Header Dropdowns**
- **Notifications Dropdown**: Rich notification system with unread counters, color-coded icons, and timestamps
- **Messages Dropdown**: Message preview with user avatars, online status indicators, and conversation management  
- **User Settings Dropdown**: Enhanced profile dropdown with account management, settings access, and security toggles
- Clean, simplified design following "less is more" principles for better readability

#### **Improved Sidebar Navigation**
- **Text-Based Logo System**: Smart logo that shows "A" when collapsed and full "ArchitectUI" when expanded
- **Fixed Chevron Directions**: Proper arrow directions (→ when closed, ↓ when open) with smooth animations
- **Hover States**: Enhanced hover interactions for better user experience
- **Responsive Animations**: Smooth transitions between collapsed and expanded states

#### **Production Deployment Support**
- **Subdirectory Deployment**: Built-in support for deploying to subdirectories like `/architectui-angular-free/`
- **Multiple Server Configurations**: Support for Apache, Nginx, IIS, and Node.js deployments
- **Cloudways Integration**: Dedicated Cloudways deployment guide and optimized configurations
- **Direct URL Access**: Fixed Angular routing for direct URL access and page refreshes
- **Custom Build Scripts**: `npm run build:prod` with correct base href configuration

#### **Documentation & Deployment**
- **Live Demo Integration**: Added live demo link to README
- **Comprehensive Deployment Guides**: Step-by-step instructions for various hosting providers
- **Server Configuration Files**: Ready-to-use `.htaccess`, `web.config`, and nginx configurations
- **Troubleshooting Guides**: Detailed solutions for common deployment issues

### 🔧 Fixed

- **Bootstrap 4 Dependencies**: Removed all remaining Bootstrap 4 traces and deprecated classes
- **Chevron Arrow Directions**: Fixed sidebar menu arrows pointing in correct directions with proper animations
- **Logo Visibility**: Resolved tiny/invisible logo issue in collapsed sidebar state
- **Direct URL Access**: Fixed 404 errors when accessing routes directly or refreshing pages
- **Asset Loading**: Resolved CSS/JS loading issues in subdirectory deployments
- **Form Components**: Updated all remaining form controls to use proper Bootstrap 5 syntax
- **Spacing Classes**: Fixed all deprecated Bootstrap spacing utility classes (`ml-*`/`mr-*` to `ms-*`/`me-*`)

### 🎨 Improved

- **Header Layout**: Better spacing and alignment of header components with proper gaps
- **Dropdown Styling**: Enhanced dropdown appearance with clean shadows, borders, and consistent spacing
- **Icon Consistency**: Unified icon usage across all components
- **Mobile Responsiveness**: Optimized mobile experience for header dropdowns and navigation
- **Animation Performance**: Smooth CSS transitions and animations throughout the interface

### 📚 Documentation

- **CLOUDWAYS-DEPLOYMENT.md**: Complete Cloudways deployment guide with server-specific configurations
- **SERVER-CONFIG.md**: Multi-server configuration guide for Apache, Nginx, IIS, and Node.js
- **Updated README**: Added live demo link, enhanced deployment instructions, and feature highlights

### 🛠️ Technical Improvements

- **Build Configuration**: Enhanced Angular build process with automatic `.htaccess` inclusion
- **Component Architecture**: Improved separation of concerns and cleaner component structure
- **SCSS Organization**: Better styling architecture with modular dropdown and sidebar styles
- **Deployment Automation**: Streamlined build and deployment process with proper base href handling

### 🔄 Migration Guide

#### From v2.x to v3.0:

1. **Update Dependencies**: `npm install` (no breaking changes)
2. **Bootstrap Components**: All form components automatically updated
3. **Deployment**: Use `npm run build:prod` for subdirectory deployment
4. **Server Configuration**: Use provided configuration files for your server type

### 🎯 New Features

- Smart responsive logo system with text-based approach
- Enhanced notification and messaging system in header
- Comprehensive deployment support for major hosting platforms  
- Production-ready server configurations
- Improved user experience with better navigation feedback

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