export * from './Popover.context';
export * as Popover from './Popover.parts';
export * as PopoverProps from './Popover.props';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, PopoverClose } from './close';
export { defaultContentProps, PopoverContent } from './content';
export { defaultPortalProps, PopoverPortal } from './portal';
export { defaultRootProps, PopoverRoot } from './root';
export { defaultTriggerProps, PopoverTrigger } from './trigger';
