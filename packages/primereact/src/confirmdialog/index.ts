export * from './ConfirmDialog.context';
export * as ConfirmDialog from './ConfirmDialog.parts';
export * as ConfirmDialogProps from './ConfirmDialog.props';

// Named runtime exports to maximize tree-shaking
export { ConfirmDialogAction, defaultActionProps } from './action';
export { ConfirmDialogCancel, defaultCancelProps } from './cancel';
export { ConfirmDialogClose, defaultCloseProps } from './close';
export { ConfirmDialogContent, defaultContentProps } from './content';
export { ConfirmDialogFooter, defaultFooterProps } from './footer';
export { ConfirmDialogHeader, defaultHeaderProps } from './header';
export { ConfirmDialogHeaderActions, defaultHeaderActionsProps } from './headeractions';
export { ConfirmDialogIcon, defaultIconProps } from './icon';
export { ConfirmDialogMessage, defaultMessageProps } from './message';
export { ConfirmDialogPortal, defaultPortalProps } from './portal';
export { ConfirmDialogRoot, defaultRootProps } from './root';
export { ConfirmDialogTitle, defaultTitleProps } from './title';
export { ConfirmDialogTrigger, defaultTriggerProps } from './trigger';
