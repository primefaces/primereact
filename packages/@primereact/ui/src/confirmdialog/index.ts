export * as ConfirmDialog from './UIConfirmDialog.parts';

// Named runtime exports to maximize tree-shaking
export {
    ConfirmDialogIcon,
    ConfirmDialogMessage,
    ConfirmDialogProps,
    ConfirmDialogProvider,
    defaultActionProps,
    defaultCancelProps,
    defaultCloseProps,
    defaultContentProps,
    defaultFooterProps,
    defaultHeaderActionsProps,
    defaultHeaderProps,
    defaultIconProps,
    defaultMessageProps,
    defaultPortalProps,
    defaultRootProps,
    defaultTitleProps,
    defaultTriggerProps,
    useConfirmDialogContext
} from 'primereact/confirmdialog';
export { UIConfirmDialogAction as ConfirmDialogAction } from './action';
export { UIConfirmDialogCancel as ConfirmDialogCancel } from './cancel';
export { UIConfirmDialogClose as ConfirmDialogClose } from './close';
export { UIConfirmDialogContent as ConfirmDialogContent } from './content';
export { UIConfirmDialogFooter as ConfirmDialogFooter } from './footer';
export { UIConfirmDialogHeader as ConfirmDialogHeader } from './header';
export { UIConfirmDialogHeaderActions as ConfirmDialogHeaderActions } from './headeractions';
export { UIConfirmDialogPortal as ConfirmDialogPortal } from './portal';
export { UIConfirmDialogRoot as ConfirmDialogRoot } from './root';
export { UIConfirmDialogTitle as ConfirmDialogTitle } from './title';
export { UIConfirmDialogTrigger as ConfirmDialogTrigger } from './trigger';
