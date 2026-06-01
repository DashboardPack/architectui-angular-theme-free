import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-deployment',
  templateUrl: './deployment.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeploymentComponent {
  protected readonly buildRoot = `ng build --configuration production`;

  protected readonly buildSub = `npm run build:prod`;

  protected readonly nginx = `location /architectui-angular-free/ {
    try_files $uri $uri/ /architectui-angular-free/index.html;
}`;

  protected readonly htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /architectui-angular-free/
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /architectui-angular-free/index.html [L]
</IfModule>`;
}
