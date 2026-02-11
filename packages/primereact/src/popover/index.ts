export * from './Popover.context';
export * as Popover from './Popover.parts';
export * as PopoverProps from './Popover.props';

// Named runtime exports to maximize tree-shaking
export { defaultArrowProps, PopoverArrow } from './arrow';
export { defaultCloseProps, PopoverClose } from './close';
export { defaultContentProps, PopoverContent } from './content';
export { defaultDescriptionProps, PopoverDescription } from './description';
export { defaultFooterProps, PopoverFooter } from './footer';
export { defaultHeaderProps, PopoverHeader } from './header';
export { defaultPopupProps, PopoverPopup } from './popup';
export { defaultPortalProps, PopoverPortal } from './portal';
export { defaultPositionerProps, PopoverPositioner } from './positioner';
export { defaultRootProps, PopoverRoot } from './root';
export { defaultTitleProps, PopoverTitle } from './title';
export { defaultTriggerProps, PopoverTrigger } from './trigger';
