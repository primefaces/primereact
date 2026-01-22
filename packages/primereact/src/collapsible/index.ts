export * from './Collapsible.context';
export * as Collapsible from './Collapsible.parts';
export * as CollapsibleProps from './Collapsible.props';

// Named runtime exports to maximize tree-shaking
export { CollapsibleContent, defaultContentProps } from './content';
export { CollapsibleRoot, defaultRootProps } from './root';
export { CollapsibleTrigger, defaultTriggerProps } from './trigger';
