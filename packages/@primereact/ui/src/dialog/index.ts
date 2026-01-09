export * as Dialog from './UIDialog.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultCloseProps,
    defaultContentProps,
    defaultFooterProps,
    defaultHeaderActionsProps,
    defaultHeaderProps,
    defaultMaximizableProps,
    defaultPortalProps,
    defaultRootProps,
    defaultTitleProps,
    defaultTriggerProps,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogPortal,
    DialogProps,
    DialogProvider,
    DialogTitle,
    useDialogContext
} from 'primereact/dialog';
export { UIDialogClose as DialogClose } from './close';
export { UIDialogMaximizable as DialogMaximizable } from './maximizable';
export { UIDialogRoot as DialogRoot } from './root';
export { UIDialogTrigger as DialogTrigger } from './trigger';
