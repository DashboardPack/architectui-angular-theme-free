# ArchitectUI Angular Free - Project Documentation

## Overview
ArchitectUI Angular Free is a modern admin dashboard template built with Angular 22 (zoneless) and Bootstrap 5.3.8. This free version provides a complete foundation for building responsive administrative interfaces with a clean, professional design.

## Technical Stack

### Core Dependencies
- **Angular 22.0.0** - Zoneless framework; NgModule-based architecture (`standalone: false` is the generation default)
- **Bootstrap 5.3.8** - Modern CSS framework for responsive design (loaded from npm with theme overrides; no vendored copy)
- **NgRx Store 21.1.0** - State management solution (replaced Angular-Redux)
- **TypeScript 6.0.3** - Type-safe JavaScript development (Angular 22 requires `>=6.0 <6.1`)
- **Chart.js 4.5.1 + ng2-charts 10.0.0** - Data visualization
- **ng-bootstrap 20.0.0** - Native Angular Bootstrap components
- **Font Awesome 7.2.0** - Icon set via `@fortawesome/fontawesome-free` (no v4 compatibility shim)

### Development Tools
- **Angular CLI 22.0.0** - Project scaffolding and developer tooling
- **@angular/build 22.0.0 (Vite + esbuild)** - Build system and dev server; there is **no webpack** in the dependency tree
- **ESLint 10** - Code linting via flat config (`eslint.config.js`) using `angular-eslint` / `typescript-eslint`

## Project Structure

```
src/
├── app/
│   ├── Layout/           # Core layout components
│   │   ├── base-layout/  # Main application wrapper
│   │   ├── Components/   # Header, sidebar, footer
│   │   └── pages-layout/ # Authentication pages layout
│   ├── DemoPages/        # Application pages
│   │   ├── Dashboards/   # Analytics dashboard
│   │   ├── Elements/     # UI elements showcase
│   │   ├── Components/   # Complex components
│   │   ├── Forms/        # Form examples
│   │   ├── Tables/       # Table components
│   │   ├── Charts/       # Chart examples
│   │   ├── Widgets/      # Dashboard widgets
│   │   └── UserPages/    # Auth pages (login, register, forgot)
│   └── ThemeOptions/     # Redux store configuration
├── assets/
│   ├── layout/          # Layout SCSS files
│   ├── components/      # Bootstrap 5 custom components
│   ├── themes/          # Theme variations
│   └── images/          # Static images and logos
```

## Key Features

### Layout System
- **Responsive sidebar** with VSM (V-Sidebar-Menu) implementation
- **Animated submenus** with smooth 0.3s CSS transitions
- **Theme switching** support (light/dark sidebar themes)
- **Mobile-responsive** header with hamburger menu
- **Breadcrumb navigation** integrated in page headers

### Component Library
- **Bootstrap 5 components** fully integrated
- **Custom widgets** for dashboard metrics
- **Chart components** using Chart.js v4
- **Form controls** with validation examples
- **Data tables** with sorting and pagination
- **Modal dialogs**, tabs, accordions, and tooltips

### Authentication Pages
- **Login page** with form validation
- **Registration page** with password requirements
- **Password recovery** with email validation
- All auth pages use Bootstrap 5 card layouts with gradient backgrounds

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:4200) — runs on Vite
ng serve

# Production build (production is the default configuration)
ng build

# Production build for subdirectory deployment (sets base-href)
npm run build:prod

# Run unit tests (Karma, zoneless)
ng test

# Lint code (ESLint flat config)
ng lint

# Generate component (standalone: false by default)
ng generate component component-name
```

> **Note:** No e2e runner is wired up in this template. The `e2e` npm script is a placeholder — add Cypress, Playwright, or WebDriver if you need end-to-end tests.

## Configuration Files

### angular.json
- Build configurations for development and production (`@angular/build` builders)
- Asset paths and style imports
- Bundle budgets: 2 MB warning / 5 MB error (initial); 6 KB warning / 10 KB error (per-component styles)

### tsconfig.json
- TypeScript compiler options
- ES2022 target with ES2022 modules, `moduleResolution: bundler`
- `strict: false` (TypeScript strict mode is off), but Angular `strictTemplates`, `strictInjectionParameters`, and `strictInputAccessModifiers` are enabled

### package.json
- All project dependencies and versions
- NPM scripts for common tasks

## Version History

See [CHANGELOG.md](CHANGELOG.md) for the complete, authoritative history. Highlights:

### Current architecture (Angular 22)
- **Angular 22, zoneless** - runs without zone.js; shared UI state and `viewChild()` queries use signals (upgraded from Angular 21 on TypeScript 6)
- **Bootstrap 5.3.8** - layered on top of the npm package; the old vendored Bootstrap 5.0.2 SCSS copy was removed
- **Font Awesome 7** - replaced Font Awesome 4 (no compatibility shim)
- **@angular/build (Vite + esbuild)** - replaced `@angular-devkit/build-angular`, removing webpack/webpack-dev-server from the dependency tree
- **ESLint 10 flat config** - migrated from ESLint 9 + legacy `.eslintrc.json`

### Original Angular 11 → Angular 20 migration
- **Angular 11 → 20** - framework modernization
- **Bootstrap 4.6 → 5.3** - modern Bootstrap without jQuery
- **Angular-Redux → NgRx Store** - official state management
- **TSLint → ESLint** - modern linting solution
- **Chart.js 2 → 4** - latest charting library
- Control flow migrated to `@if` / `@for` / `@switch`; SCSS paths made relative; auth pages rebuilt on Bootstrap 5

### Removed along the way
- PerfectScrollbar (framework incompatibility)
- jQuery (no longer needed with Bootstrap 5)
- Standalone `popper.js` (Bootstrap 5 bundles Popper; `@popperjs/core` remains only as ng-bootstrap's peer dependency)
- `@angular-devkit/build-angular`, webpack, and the legacy dev server (see current architecture above)

## Browser Support

Configured in `.browserslistrc`:
- Chrome/Edge: last 2 versions
- Firefox: last 2 versions  
- Safari: last 2 versions
- Opera: last 2 versions
- No IE 11 support

## Performance Considerations

### Bundle Sizes (production build)
- Main bundle: ~1.14 MB raw (~262 KB transfer)
- Styles: ~385 KB raw (~52 KB transfer)
- Initial total: ~1.61 MB raw (~335 KB transfer)

### Optimization Tips
- Lazy load feature modules
- Use OnPush change detection where possible
- Implement virtual scrolling for large lists
- Optimize images and use WebP format
- Enable production build optimizations

## Styling Architecture

### SCSS Organization
- Component-specific styles with ViewEncapsulation
- Global theme variables in `_layout-variables.scss`
- Bootstrap overrides in custom component files
- Utility classes following Bootstrap 5 conventions

### Theme System
- CSS variables for dynamic theming
- Gradient backgrounds using CSS linear-gradient
- Responsive breakpoints aligned with Bootstrap
- Dark/light sidebar theme variations

## State Management

### NgRx Store Structure
- Theme options stored globally
- Sidebar state (collapsed/expanded)
- User preferences persistence
- Redux DevTools enabled in development

## Known Issues & Limitations

1. **Bundle Size Warnings** - Large initial bundle size due to comprehensive component library
2. **Deprecation Warnings** - Some SCSS functions show deprecation warnings (will be addressed in future updates)
3. **PerfectScrollbar Removed** - Custom scrollbar styling was removed during the framework modernization (incompatible with modern Angular)

## Practical Usage Examples

### Creating a New Dashboard Page

1. **Generate the component:**
```bash
ng generate component DemoPages/Dashboards/my-dashboard
```

2. **Add routing in dashboards.routing.ts:**
```typescript
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

const routes: Routes = [
  {
    path: 'my-dashboard',
    component: MyDashboardComponent,
    data: { extraParameter: 'dashboardsMenu' }
  }
];
```

3. **Implement the dashboard layout:**
```typescript
// my-dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  standalone: false
})
export class MyDashboardComponent {
  // Chart configuration
  public chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
      data: [65, 59, 80, 81],
      label: 'Sales',
      backgroundColor: 'rgba(103, 126, 234, 0.2)',
      borderColor: '#677eea'
    }]
  };
}
```

4. **Create the template with widgets:**
```html
<!-- my-dashboard.component.html -->
<app-page-title 
  heading="My Dashboard" 
  subheading="Overview of key metrics"
  icon="pe-7s-graph">
</app-page-title>

<div class="row">
  <!-- Metric Widget -->
  <div class="col-md-6 col-xl-3">
    <div class="card mb-3 widget-content bg-midnight-bloom">
      <div class="widget-content-wrapper text-white">
        <div class="widget-content-left">
          <div class="widget-heading">Total Sales</div>
          <div class="widget-subheading">Last month performance</div>
        </div>
        <div class="widget-content-right">
          <div class="widget-numbers">
            <span>$15,692</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Chart Widget -->
  <div class="col-md-12 col-lg-6">
    <div class="card mb-3">
      <div class="card-header">
        Sales Overview
      </div>
      <div class="card-body">
        <canvas baseChart
          [datasets]="chartData.datasets"
          [labels]="chartData.labels"
          [type]="'line'">
        </canvas>
      </div>
    </div>
  </div>
</div>
```

### Adding a New Sidebar Menu Item

1. **Edit sidebar.component.ts:**
```typescript
// Add to the sidebar menu structure
{
  path: '/pages/my-feature',
  title: 'My Feature',
  iconType: 'pe7s-plugin',
  iconClass: 'text-primary'
}

// For a menu with submenus:
{
  title: 'My Section',
  iconType: 'pe7s-box2',
  toggle: 'mySection',
  submenu: [
    {
      path: '/my-section/page1',
      title: 'Page 1'
    },
    {
      path: '/my-section/page2', 
      title: 'Page 2'
    }
  ]
}
```

2. **Handle menu state in sidebar.component.ts:**
```typescript
toggleMenu(menu: string) {
  const index = this.openMenus.indexOf(menu);
  if (index > -1) {
    this.openMenus.splice(index, 1);
  } else {
    this.openMenus.push(menu);
  }
}
```

### Creating a Custom Form Page

1. **Generate form component:**
```bash
ng generate component DemoPages/Forms/user-form
```

2. **Implement form with validation:**
```typescript
// user-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: false
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      role: ['', Validators.required]
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.userForm.invalid) {
      return;
    }
    
    // Process form data
    console.log('Form Data:', this.userForm.value);
  }
}
```

3. **Create the form template:**
```html
<!-- user-form.component.html -->
<app-page-title 
  heading="User Registration" 
  subheading="Create a new user account"
  icon="pe-7s-user">
</app-page-title>

<div class="row">
  <div class="col-md-8">
    <div class="card">
      <div class="card-header">
        User Information
      </div>
      <div class="card-body">
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">First Name</label>
              <input type="text" 
                class="form-control" 
                formControlName="firstName"
                [ngClass]="{'is-invalid': submitted && f['firstName'].errors}">
              @if (submitted && f['firstName'].errors) {
                <div class="invalid-feedback">
                  First name is required
                </div>
              }
            </div>
            
            <div class="col-md-6">
              <label class="form-label">Last Name</label>
              <input type="text" 
                class="form-control" 
                formControlName="lastName"
                [ngClass]="{'is-invalid': submitted && f['lastName'].errors}">
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" 
              class="form-control" 
              formControlName="email"
              [ngClass]="{'is-invalid': submitted && f['email'].errors}">
            @if (submitted && f['email'].errors?.['required']) {
              <div class="invalid-feedback">Email is required</div>
            }
            @if (submitted && f['email'].errors?.['email']) {
              <div class="invalid-feedback">Email must be valid</div>
            }
          </div>

          <div class="mb-3">
            <label class="form-label">Role</label>
            <select class="form-select" formControlName="role">
              <option value="">Choose...</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i> Save User
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
```

### Working with Data Tables

1. **Create a data table component:**
```typescript
// user-list.component.ts
import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: Date;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: false
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';
  
  ngOnInit() {
    // Load data (replace with actual API call)
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', 
        status: 'active', joinDate: new Date('2024-01-15') },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', 
        status: 'inactive', joinDate: new Date('2024-02-20') }
    ];
    this.filteredUsers = [...this.users];
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(u => u.id !== id);
      this.filterUsers();
    }
  }
}
```

2. **Create the table template:**
```html
<!-- user-list.component.html -->
<div class="card">
  <div class="card-header">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="mb-0">User List</h5>
      <div class="d-flex gap-2">
        <input type="text" 
          class="form-control form-control-sm" 
          placeholder="Search users..."
          [(ngModel)]="searchTerm"
          (input)="filterUsers()">
        <button class="btn btn-sm btn-primary">
          <i class="fa fa-plus"></i> Add User
        </button>
      </div>
    </div>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (user of filteredUsers; track user.id) {
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span class="badge" 
                  [ngClass]="{
                    'bg-success': user.status === 'active',
                    'bg-secondary': user.status === 'inactive'
                  }">
                  {{ user.status }}
                </span>
              </td>
              <td>{{ user.joinDate | date:'short' }}</td>
              <td>
                <button class="btn btn-sm btn-info me-1">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" 
                  (click)="deleteUser(user.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          }
          @empty {
            <tr>
              <td colspan="6" class="text-center">No users found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
</div>
```

### Using Theme Options with NgRx

1. **Access theme state:**
```typescript
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigActions } from '../../ThemeOptions/store/config.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(private store: Store) {}

  toggleSidebar() {
    this.store.dispatch(ConfigActions.toggleSidebarMobile());
  }

  changeTheme(theme: string) {
    // Dispatch theme change action
    this.store.dispatch(ConfigActions.setTheme({ theme }));
  }
}
```

### Creating Modal Dialogs

1. **Using NgBootstrap modals:**
```typescript
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-example',
  template: `
    <button class="btn btn-primary" (click)="open(content)">
      Open Modal
    </button>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Confirm Action</h4>
        <button type="button" class="btn-close" 
          (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to proceed?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" 
          (click)="modal.dismiss()">Cancel</button>
        <button type="button" class="btn btn-primary" 
          (click)="modal.close('Save')">Confirm</button>
      </div>
    </ng-template>
  `
})
export class ModalExampleComponent {
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { centered: true })
      .result.then(
        (result) => console.log('Confirmed:', result),
        (reason) => console.log('Dismissed:', reason)
      );
  }
}
```

### Working with Charts

1. **Line chart example:**
```typescript
// sales-chart.component.ts
import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  template: `
    <canvas baseChart
      [data]="lineChartData"
      [options]="lineChartOptions"
      [type]="'line'">
    </canvas>
  `
})
export class SalesChartComponent {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Sales 2024',
        fill: true,
        tension: 0.5,
        borderColor: '#677eea',
        backgroundColor: 'rgba(103,126,234,0.2)'
      },
      {
        data: [28, 48, 40, 19, 86, 27],
        label: 'Sales 2023',
        fill: true,
        tension: 0.5,
        borderColor: '#f7b924',
        backgroundColor: 'rgba(247,185,36,0.2)'
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };
}
```

## Best Practices

1. **Component Development**
   - Generate NgModule-based components (`standalone: false`) to match this template's architecture
   - Follow Angular style guide conventions
   - Implement proper TypeScript typing

2. **Performance**
   - Use TrackBy functions in loops
   - Implement lazy loading for routes
   - Optimize change detection strategy

3. **Code Quality**
   - Run linting before commits
   - Write unit tests for business logic
   - Use reactive forms for complex forms

## Common Patterns

### Loading States
```typescript
loading = false;
error: string | null = null;

loadData() {
  this.loading = true;
  this.error = null;
  
  this.apiService.getData().subscribe({
    next: (data) => {
      this.processData(data);
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Failed to load data';
      this.loading = false;
    }
  });
}
```

### Confirmation Dialogs
```typescript
deleteItem(id: number) {
  const modalRef = this.modalService.open(ConfirmDialogComponent);
  modalRef.componentInstance.message = 'Delete this item?';
  
  modalRef.result.then(
    (confirmed) => {
      if (confirmed) {
        this.performDelete(id);
      }
    }
  );
}
```

### Form Validation Patterns
```typescript
// Custom validator
emailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (!email || email.includes('@company.com')) {
    return null;
  }
  return { companyEmail: true };
}

// Async validator
uniqueUsernameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  return this.userService.checkUsername(control.value).pipe(
    map(exists => exists ? { usernameTaken: true } : null)
  );
}
```

## Support & Resources

- **Documentation**: Refer to CLAUDE.md for AI assistance guidelines
- **Angular Docs**: https://angular.dev
- **Bootstrap Docs**: https://getbootstrap.com/docs/5.3
- **NgRx Docs**: https://ngrx.io

## License

This is the free version of ArchitectUI Angular theme. Check the original repository for licensing terms and premium version availability.

---

*Last Updated: June 2026 - Angular 22 + TypeScript 6 on Vite (`@angular/build`). See [CHANGELOG.md](CHANGELOG.md) for full version history.*
