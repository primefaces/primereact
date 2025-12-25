export * as Toast from './UIToast.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultActionProps,
    defaultCloseProps,
    defaultDescriptionProps,
    defaultIconProps,
    defaultItemProps,
    defaultRegionProps,
    defaultRootProps,
    defaultTitleProps,
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastIcon,
    ToastItem,
    ToastProps,
    ToastProvider,
    ToastRegion,
    ToastTitle,
    useToastContext
} from 'primereact/toast';
export { UIToastRoot as ToastRoot } from './root';
