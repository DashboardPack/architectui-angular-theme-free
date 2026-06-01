import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsLayoutComponent } from './layout/docs-layout.component';
import { CodeBlockComponent } from './code-block/code-block.component';
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

@NgModule({
  declarations: [
    DocsLayoutComponent,
    CodeBlockComponent,
    DocsHomeComponent,
    GettingStartedComponent,
    FolderStructureComponent,
    DeploymentComponent,
    LayoutSystemComponent,
    ThemingComponent,
    StateSignalsComponent,
    DocsComponentsComponent,
    DocsChartsComponent,
    ToolingComponent,
    ChangelogComponent,
  ],
  imports: [CommonModule, DocsRoutingModule],
})
export class DocsModule {}
