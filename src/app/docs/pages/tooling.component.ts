import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-tooling',
  templateUrl: './tooling.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolingComponent {
  protected readonly builders = `// angular.json — all targets use @angular/build (Vite + esbuild)
"build":       { "builder": "@angular/build:application" }
"serve":       { "builder": "@angular/build:dev-server" }
"extract-i18n":{ "builder": "@angular/build:extract-i18n" }
"test":        { "builder": "@angular/build:karma" }`;

  protected readonly eslint = `// eslint.config.js — flat config
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  { files: ['**/*.ts'], extends: [...angular.configs.tsRecommended], /* … */ },
  { files: ['**/*.html'], extends: [...angular.configs.templateRecommended] },
);`;
}
