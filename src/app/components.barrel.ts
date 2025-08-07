// Barrel file for all components to be used in routing
// This prevents circular dependencies while making components available to routing

// Dashboard components
export { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

// Elements components
export { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
export { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
export { CardsComponent } from './DemoPages/Elements/cards/cards.component';
export { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
export { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
export { IconsComponent } from './DemoPages/Elements/icons/icons.component';

// Components
export { AccordionsComponent } from './DemoPages/Components/accordions/accordions.component';
export { TabsComponent } from './DemoPages/Components/tabs/tabs.component';
export { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
export { ModalsComponent } from './DemoPages/Components/modals/modals.component';
export { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
export { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
export { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Chart components
export { ChartjsComponent } from './DemoPages/Charts/chartjs/chartjs.component';

// Form components
export { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
export { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

// Table components
export { RegularComponent } from './DemoPages/Tables/regular/regular.component';
export { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Widget components
export { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// User pages components
export { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
export { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
export { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';