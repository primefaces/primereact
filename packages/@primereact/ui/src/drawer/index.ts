export * as Drawer from './UIDrawer.parts';

// Named runtime exports to maximize tree-shaking
export {
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
export { UIDrawerClose as DrawerClose } from './close';
export { UIDrawerRoot as DrawerRoot } from './root';
export { UIDrawerTrigger as DrawerTrigger } from './trigger';
