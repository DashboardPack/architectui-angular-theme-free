import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsLayoutComponent } from './layout/docs-layout.component';
import { DocsHomeComponent } from './pages/docs-home.component';
import { GettingStartedComponent } from './pages/getting-started.component';
import { FolderStructureComponent } from './pages/folder-structure.component';
import { DeploymentComponent } from './pages/deployment.component';
import { LayoutSystemComponent } from './pages/layout-system.component';
import { ThemingComponent } from './pages/theming.component';
import { StateSignalsComponent } from './pages/state-signals.component';
import { DocsComponentsComponent } from './pages/docs-components.component';
import { DocsChartsComponent } from './pages/docs-charts.component';
import { ToolingComponent } from './pages/tooling.component';
import { ChangelogComponent } from './pages/changelog.component';

const routes: Routes = [
  {
    path: '',
    component: DocsLayoutComponent,
    children: [
      { path: '', component: DocsHomeComponent, data: { title: 'Documentation' } },
      { path: 'getting-started', component: GettingStartedComponent, data: { title: 'Getting Started' } },
      { path: 'folder-structure', component: FolderStructureComponent, data: { title: 'Folder Structure' } },
      { path: 'deployment', component: DeploymentComponent, data: { title: 'Deployment' } },
      { path: 'layout-system', component: LayoutSystemComponent, data: { title: 'Layout System' } },
      { path: 'theming', component: ThemingComponent, data: { title: 'Theming' } },
      { path: 'state', component: StateSignalsComponent, data: { title: 'State & Signals' } },
      { path: 'components', component: DocsComponentsComponent, data: { title: 'Components' } },
      { path: 'charts', component: DocsChartsComponent, data: { title: 'Charts' } },
      { path: 'tooling', component: ToolingComponent, data: { title: 'Build & Tooling' } },
      { path: 'changelog', component: ChangelogComponent, data: { title: 'Changelog' } },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
