export interface DocsNavItem {
  label: string;
  route: string;
  exact?: boolean;
}

export interface DocsNavGroup {
  title: string;
  items: DocsNavItem[];
}

/** Sidebar navigation for the documentation section. */
export const DOCS_NAV: DocsNavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', route: '/docs', exact: true },
      { label: 'Getting Started', route: '/docs/getting-started' },
      { label: 'Folder Structure', route: '/docs/folder-structure' },
      { label: 'Deployment', route: '/docs/deployment' },
    ],
  },
  {
    title: 'Customization',
    items: [
      { label: 'Layout System', route: '/docs/layout-system' },
      { label: 'Theming', route: '/docs/theming' },
      { label: 'State & Signals', route: '/docs/state' },
    ],
  },
  {
    title: 'Features',
    items: [
      { label: 'Components', route: '/docs/components' },
      { label: 'Charts', route: '/docs/charts' },
    ],
  },
  {
    title: 'Build',
    items: [{ label: 'Build & Tooling', route: '/docs/tooling' }],
  },
  {
    title: 'Release Notes',
    items: [{ label: 'Changelog', route: '/docs/changelog' }],
  },
];
