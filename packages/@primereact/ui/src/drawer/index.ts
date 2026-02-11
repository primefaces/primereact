export * as Drawer from './UIDrawer.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultBackdropProps,
    defaultCloseProps,
    defaultContentProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultPortalProps,
    defaultRootProps,
    defaultTitleProps,
    defaultTriggerProps,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerPortal,
    DrawerProps,
    DrawerProvider,
    DrawerTitle,
    useDrawerContext
} from 'primereact/drawer';
export { UIDrawerBackdrop as DrawerBackdrop } from './backdrop';
export { UIDrawerClose as DrawerClose } from './close';
export { UIDrawerRoot as DrawerRoot } from './root';
export { UIDrawerTrigger as DrawerTrigger } from './trigger';
