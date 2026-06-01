import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type CodeLanguage = 'bash' | 'ts' | 'html' | 'scss' | 'css' | 'json' | 'text';

const TS_KEYWORDS =
  /\b(import|export|from|default|const|let|var|function|class|interface|type|extends|implements|if|else|for|while|do|return|new|this|super|null|undefined|true|false|async|await|try|catch|finally|throw|switch|case|break|continue|public|private|protected|readonly|static|abstract|as|in|of|typeof|instanceof|void|enum|namespace|module|declare|yield|satisfies)\b/g;

const TS_TYPES =
  /\b(string|number|boolean|any|unknown|never|object|bigint|symbol|Array|Promise|Record|Partial|Required|Readonly|Pick|Omit|Map|Set|Date|RegExp|Error|Observable|Signal|Routes)\b/g;

const BASH_BUILTINS =
  /\b(cd|ls|cp|mv|rm|mkdir|rmdir|touch|cat|echo|grep|find|sed|awk|sort|uniq|head|tail|chmod|chown|export|source|alias|which|sudo|kill|ps|tar|zip|unzip|curl|wget|ssh|scp|rsync|git|npm|pnpm|yarn|npx|node|ng|http-server)\b/g;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightTs(code: string): string {
  const out: string[] = [];
  let i = 0;
  while (i < code.length) {
    const ch = code[i];
    const next = code[i + 1];
    if (ch === '/' && next === '/') {
      const end = code.indexOf('\n', i);
      const stop = end === -1 ? code.length : end;
      out.push(`<span class="tok-cmt">${escapeHtml(code.slice(i, stop))}</span>`);
      i = stop;
    } else if (ch === '/' && next === '*') {
      const end = code.indexOf('*/', i + 2);
      const stop = end === -1 ? code.length : end + 2;
      out.push(`<span class="tok-cmt">${escapeHtml(code.slice(i, stop))}</span>`);
      i = stop;
    } else if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      let j = i + 1;
      while (j < code.length && code[j] !== quote) {
        if (code[j] === '\\') j += 2;
        else j++;
      }
      out.push(`<span class="tok-str">${escapeHtml(code.slice(i, Math.min(j + 1, code.length)))}</span>`);
      i = j + 1;
    } else {
      let j = i;
      while (j < code.length) {
        const c = code[j];
        if (c === '"' || c === "'" || c === '`') break;
        if (c === '/' && (code[j + 1] === '/' || code[j + 1] === '*')) break;
        j++;
      }
      const segment = escapeHtml(code.slice(i, j))
        .replace(/\b\d+(?:\.\d+)?\b/g, '<span class="tok-num">$&</span>')
        .replace(TS_KEYWORDS, '<span class="tok-key">$&</span>')
        .replace(TS_TYPES, '<span class="tok-typ">$&</span>')
        .replace(/@\w+/g, '<span class="tok-dec">$&</span>');
      out.push(segment);
      i = j;
    }
  }
  return out.join('');
}

function highlightBash(code: string): string {
  return code
    .split('\n')
    .map((line) => {
      if (/^\s*#/.test(line)) {
        return `<span class="tok-cmt">${escapeHtml(line)}</span>`;
      }
      const commentIdx = line.indexOf(' #');
      let main = line;
      let trailing = '';
      if (commentIdx > -1) {
        main = line.slice(0, commentIdx);
        trailing = `<span class="tok-cmt">${escapeHtml(line.slice(commentIdx))}</span>`;
      }
      let result = '';
      let i = 0;
      while (i < main.length) {
        const ch = main[i];
        if (ch === '"' || ch === "'") {
          const quote = ch;
          let j = i + 1;
          while (j < main.length && main[j] !== quote) {
            if (main[j] === '\\') j += 2;
            else j++;
          }
          result += `<span class="tok-str">${escapeHtml(main.slice(i, Math.min(j + 1, main.length)))}</span>`;
          i = j + 1;
        } else {
          let j = i;
          while (j < main.length && main[j] !== '"' && main[j] !== "'") j++;
          result += escapeHtml(main.slice(i, j))
            .replace(BASH_BUILTINS, '<span class="tok-fn">$&</span>')
            .replace(/(\s|^)(--?[\w-]+)/g, '$1<span class="tok-flag">$2</span>')
            .replace(/\b\d+(?:\.\d+)?\b/g, '<span class="tok-num">$&</span>');
          i = j;
        }
      }
      return result + trailing;
    })
    .join('\n');
}

function highlightHtml(code: string): string {
  return escapeHtml(code)
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-cmt">$1</span>')
    .replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="tok-tag">$2</span>')
    .replace(/(\s)([\w@:.\-*[\]()]+)(=)/g, '$1<span class="tok-attr">$2</span>$3')
    .replace(/(&quot;[^&]*?&quot;)/g, '<span class="tok-str">$1</span>')
    .replace(/=(&#39;[^&]*?&#39;)/g, '=<span class="tok-str">$1</span>');
}

function highlightCss(code: string): string {
  return escapeHtml(code)
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-cmt">$1</span>')
    .replace(/(^|\n)([^{}\n]+)\{/g, (_m, p1, p2) => `${p1}<span class="tok-sel">${p2.trimEnd()}</span> {`)
    .replace(/([\w-]+)(\s*:)/g, '<span class="tok-attr">$1</span>$2')
    .replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, '<span class="tok-str">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)(px|rem|em|%|vh|vw|ms|s|deg)?\b/g, '<span class="tok-num">$&</span>')
    .replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span class="tok-num">$1</span>');
}

function highlightJson(code: string): string {
  return escapeHtml(code)
    .replace(/(&quot;[^&]*?&quot;)(\s*:)/g, '<span class="tok-attr">$1</span>$2')
    .replace(/:\s*(&quot;[^&]*?&quot;)/g, (m) => m.replace(/(&quot;[^&]*?&quot;)/, '<span class="tok-str">$1</span>'))
    .replace(/\b(true|false|null)\b/g, '<span class="tok-key">$&</span>')
    .replace(/\b\d+(?:\.\d+)?\b/g, '<span class="tok-num">$&</span>');
}

function highlight(code: string, lang: CodeLanguage): string {
  switch (lang) {
    case 'ts':
      return highlightTs(code);
    case 'bash':
      return highlightBash(code);
    case 'html':
      return highlightHtml(code);
    case 'scss':
    case 'css':
      return highlightCss(code);
    case 'json':
      return highlightJson(code);
    default:
      return escapeHtml(code);
  }
}

/**
 * Lightweight, dependency-free code block with syntax highlighting and a copy
 * button. Pass the snippet via the `code` input (string) rather than projected
 * content so samples containing `{{ }}` or HTML tags need no escaping.
 */
@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent {
  readonly code = input('');
  readonly lang = input<CodeLanguage>('text');

  protected readonly copied = signal(false);
  private copyTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly highlighted = computed<SafeHtml>(() => {
    const trimmed = this.code().replace(/^\n/, '').replace(/\n\s*$/, '');
    return this.sanitizer.bypassSecurityTrustHtml(highlight(trimmed, this.lang()));
  });

  constructor(private readonly sanitizer: DomSanitizer) {}

  copy(): void {
    const text = this.code().replace(/^\n/, '').replace(/\n\s*$/, '');
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    this.copied.set(true);
    if (this.copyTimer) clearTimeout(this.copyTimer);
    this.copyTimer = setTimeout(() => this.copied.set(false), 1500);
  }
}
