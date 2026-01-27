export * as Panel from './UIPanel.parts';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, defaultFooterProps, defaultHeaderProps, defaultRootProps, defaultTitleProps, defaultTriggerProps, PanelFooter, PanelHeader, PanelProps, PanelProvider, PanelTitle, usePanelContext } from 'primereact/panel';
export { UIPanelContent as PanelContent } from './content';
export { UIPanelRoot as PanelRoot } from './root';
export { UIPanelTrigger as PanelTrigger } from './trigger';
