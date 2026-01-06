import type { useDrawerProps } from '@primereact/types/shared/drawer';

export const defaultProps: useDrawerProps = {
    open: false,
    defaultOpen: false,
    modal: true,
    blockScroll: false,
    dismissable: true,
    baseZIndex: 0,
    autoZIndex: true,
    onOpenChange: undefined
};
