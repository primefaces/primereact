export * from './Dialog.context';
export * as Dialog from './Dialog.parts';
export * as DialogProps from './Dialog.props';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, DialogClose } from './close';
export { defaultContentProps, DialogContent } from './content';
export { defaultFooterProps, DialogFooter } from './footer';
export { defaultHeaderProps, DialogHeader } from './header';
export { defaultHeaderActionsProps, DialogHeaderActions } from './headeractions';
export { defaultMaximizableProps, DialogMaximizable } from './maximizable';
export { defaultPortalProps, DialogPortal } from './portal';
export { defaultRootProps, DialogRoot } from './root';
export { defaultTitleProps, DialogTitle } from './title';
export { defaultTriggerProps, DialogTrigger } from './trigger';
