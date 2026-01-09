export * as Popover from './UIPopover.parts';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, defaultContentProps, defaultPortalProps, defaultRootProps, defaultTriggerProps, PopoverContent, PopoverPortal, PopoverProps, PopoverProvider, usePopoverContext } from 'primereact/popover';
export { UIPopoverClose as PopoverClose } from './close';
export { UIPopoverRoot as PopoverRoot } from './root';
export { UIPopoverTrigger as PopoverTrigger } from './trigger';
