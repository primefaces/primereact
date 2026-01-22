export * as Collapsible from './UICollapsible.parts';

// Named runtime exports to maximize tree-shaking
export { CollapsibleProvider, CollapsibleTrigger, defaultContentProps, defaultRootProps, defaultTriggerProps, useCollapsibleContext } from 'primereact/collapsible';
export { UICollapsibleContent as CollapsibleContent } from './content';
export { UICollapsibleRoot as CollapsibleRoot } from './root';
