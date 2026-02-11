export * as Toast from './UIToast.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultActionProps,
    defaultCloseProps,
    defaultDescriptionProps,
    defaultIconProps,
    defaultRootProps,
    defaultTitleProps,
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastIcon,
    ToastProps,
    ToastProvider,
    ToastTitle,
    useToastContext
} from 'primereact/toast';
export { UIToastRoot as ToastRoot } from './root';
