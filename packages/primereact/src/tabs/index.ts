export * from './Tabs.context';
export * as Tabs from './Tabs.parts';
export * as TabsProps from './Tabs.props';

// Named runtime exports to maximize tree-shaking
export { defaultIndicatorProps, TabsIndicator } from './indicator';
export { defaultListProps, TabsList } from './list';
export { defaultPanelProps, TabsPanel } from './panel';
export { defaultPanelsProps, TabsPanels } from './panels';
export { defaultRootProps, TabsRoot } from './root';
export { defaultTabProps, TabsTab } from './tab';
