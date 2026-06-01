import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-components',
  templateUrl: './docs-components.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponentsComponent {
  protected readonly modal = `import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({ /* … */ })
export class ExampleComponent {
  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<unknown>) {
    this.modalService.open(content, { centered: true });
  }
}`;
}
