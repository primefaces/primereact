export * as Panel from './UIPanel.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultCollapseProps,
    defaultContentProps,
    defaultFooterProps,
    defaultHeaderActionsProps,
    defaultHeaderProps,
    defaultRootProps,
    defaultTitleProps,
    PanelCollapse,
    PanelContent,
    PanelFooter,
    PanelHeader,
    PanelHeaderActions,
    PanelProps,
    PanelProvider,
    PanelTitle,
    usePanelContext
} from 'primereact/panel';
export { UIPanelRoot as PanelRoot } from './root';
