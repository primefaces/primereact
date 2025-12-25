export * from './Panel.context';
export * as Panel from './Panel.parts';
export * as PanelProps from './Panel.props';

// Named runtime exports to maximize tree-shaking
export { defaultCollapseProps, PanelCollapse } from './collapse';
export { defaultContentProps, PanelContent } from './content';
export { defaultFooterProps, PanelFooter } from './footer';
export { defaultHeaderProps, PanelHeader } from './header';
export { defaultHeaderActionsProps, PanelHeaderActions } from './headeractions';
export { defaultRootProps, PanelRoot } from './root';
export { defaultTitleProps, PanelTitle } from './title';
