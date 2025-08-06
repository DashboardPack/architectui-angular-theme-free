# Angular 11 to Angular 20 Migration Notes

## Migration Date: August 2025

### Overview
This document captures the state of the ArchitectUI Angular theme migration from Angular 11 to Angular 20.1.4 and Bootstrap 4 to Bootstrap 5.3.7.

## Current Status

### ✅ Completed
1. **Angular Core Migration**
   - Updated from Angular 11 to Angular 20.1.4
   - Updated TypeScript from 4.0.7 to 5.8.3
   - Updated all Angular packages to v20

2. **Bootstrap Migration**
   - Updated from Bootstrap 4.6.0 to Bootstrap 5.3.7
   - Note: CSS utility classes need updates (see below)

3. **State Management**
   - Replaced deprecated @angular-redux/store with @ngrx/store v20
   - Created new NgRx store configuration
   - Updated components to use new ConfigService

4. **Linting**
   - Migrated from deprecated TSLint to ESLint
   - Added Angular ESLint configuration

5. **Dependencies**
   - Updated Chart.js from v2 to v4
   - Updated ng2-charts to v6
   - Removed ngx-perfect-scrollbar (incompatible with Angular 20)
   - Added @popperjs/core for ng-bootstrap

## 🚨 Current Issues

### Compilation Errors
The application currently fails to compile with errors suggesting components are standalone when they're not:
```
NG6008: Component [ComponentName] is standalone, and cannot be declared in an NgModule
```

**Possible Causes:**
1. IDE auto-formatting or extensions modifying files
2. Angular 20 compiler detecting something that makes it think components are standalone
3. Conflicting module configurations

### Temporary Workaround Attempted
- Disabled TypeScript strict mode
- Removed `noPropertyAccessFromIndexSignature` check

## 📋 Remaining Tasks

### 1. Fix Compilation Issues
- Investigate why Angular thinks components are standalone
- Either convert all components to standalone OR fix the module declarations

### 2. Bootstrap 5 CSS Updates Required
Replace Bootstrap 4 utility classes with Bootstrap 5 equivalents:
- `ml-*` → `ms-*` (margin-left → margin-start)
- `mr-*` → `me-*` (margin-right → margin-end)
- `pl-*` → `ps-*` (padding-left → padding-start)
- `pr-*` → `pe-*` (padding-right → padding-end)
- `float-left` → `float-start`
- `float-right` → `float-end`
- `text-left` → `text-start`
- `text-right` → `text-end`

### 3. Chart.js v4 API Updates
- Update chart configurations for Chart.js v4 syntax
- Fix scales configuration (xAxes/yAxes → x/y)
- Remove deprecated Color type usage

### 4. Component Updates
- Fix any `@ViewChild` references that need `{ static: true/false }`
- Update any deprecated Angular APIs
- Fix router navigation if needed

## 🔧 How to Test When Fixed

1. Run the development server:
   ```bash
   ng serve
   ```

2. Navigate to http://localhost:4200

3. Test key features:
   - Dashboard analytics page
   - Charts functionality
   - Bootstrap components (accordions, modals, etc.)
   - Form controls
   - Tables
   - Navigation/routing

## 📝 Notes for Future Development

### Converting to Standalone Components (Recommended)
Angular 20 encourages standalone components. To fully modernize:

1. Add `standalone: true` to all component decorators
2. Import required modules directly in components
3. Update main.ts to use `bootstrapApplication`
4. Remove AppModule

### Alternative: Keep Module-Based Architecture
If keeping the current architecture:
1. Ensure no components have `standalone: true`
2. Keep all components in NgModule declarations
3. Maintain current bootstrap process

## 🛠️ Quick Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
ng serve

# Build for production
ng build --configuration production

# Run linting
ng lint

# Run tests
ng test
```

## ⚠️ Known Warnings
- SASS deprecation warnings from Bootstrap (non-blocking)
- Browserslist warnings for old browsers (can be ignored)
- Node.js version warnings (using v23, Angular prefers v20/22)

## 🔄 Rollback Instructions
If needed, rollback to the original state:
```bash
git checkout master
git branch -D angular-20-bootstrap-5-upgrade
```