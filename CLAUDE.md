# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ArchitectUI Angular is an admin dashboard template built with Angular 21 (zoneless), Bootstrap 5, Chart.js, and NgRx. It uses NgModules (not standalone components) with `standalone: false` set as the default for component generation.

## Common Commands

```bash
ng serve                    # Start dev server at http://localhost:4200
ng build                    # Build for production
npm run build:prod          # Build with base-href /architectui-angular-free/
ng test                     # Run unit tests via Karma (zoneless)
ng lint                     # Run ESLint
ng generate component <name> # Generate new component (uses standalone: false by default)
```

## Architecture

### Module Organization

The app uses feature modules to organize code:

- `app.module.ts` - Root module with layout components and NgRx store setup
- `dashboards.module.ts` - Dashboard page components
- `elements.module.ts` - UI elements (buttons, cards, dropdowns, icons, timeline)
- `components.module.ts` - Interactive components (tabs, accordions, modals, pagination)
- `charts.module.ts` - Chart.js chart components via ng2-charts
- `forms.module.ts` - Form components
- `tables.module.ts` - Table components
- `user-pages.module.ts` - Auth pages (login, register, forgot password)
- `widgets.module.ts` - Dashboard widgets
- `shared.module.ts` - Shared utilities

### Layout System

Two layout components in `src/app/Layout/`:

- `BaseLayoutComponent` - Main app layout with header, sidebar, footer (used for dashboard routes)
- `PagesLayoutComponent` - Minimal layout for auth pages (no sidebar/header)

Routes use these layouts as parent components in `app-routing.module.ts`.

### State Management

NgRx store manages theme configuration:

- State: `ThemeOptions/store/config.state.ts` - `ConfigState` with `headerTheme` and `sidebarTheme`
- Reducer: `ThemeOptions/store/config.reducer.ngrx.ts`
- Actions: `ThemeOptions/store/config.actions.ngrx.ts`
- Service: `ThemeOptions/store/config.service.ts` - Wraps store for component access

### Component Barrel

`components.barrel.ts` exports all page components for centralized imports in the routing module.

### Styling

- SCSS with Bootstrap 5 customizations in `src/assets/components/bootstrap5/`
- Global styles in `src/styles.scss` and `src/assets/base.scss`
- Bootstrap JS bundle loaded via angular.json scripts array

## Key Technical Notes

- **Angular 21 Zoneless**: App runs without zone.js for better performance
- Components use `standalone: false` (NgModule-based architecture)
- Charts use ng2-charts with Chart.js v4
- Angular animations are disabled in BaseLayoutComponent to prevent layout jumping
- TypeScript strict mode is disabled (`strict: false` in tsconfig.json)
- Use `afterNextRender()` instead of `setTimeout()` for DOM operations (zoneless compatible)
- Use signals (`signal()`) for reactive state that needs UI updates without zone.js
- Templates use Angular 21 control flow syntax (`@if`, `@for`) instead of `*ngIf`, `*ngFor`
