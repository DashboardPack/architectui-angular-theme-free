interface BootstrapTooltip {
  new (element: Element, options?: Record<string, unknown>): BootstrapTooltip;
  dispose(): void;
}

interface BootstrapGlobal {
  Tooltip: BootstrapTooltip;
  Popover: unknown;
  Modal: unknown;
}

declare global {
  interface Window {
    bootstrap?: BootstrapGlobal;
  }
}

export {};
