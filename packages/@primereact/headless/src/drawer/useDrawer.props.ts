import type { useDrawerProps } from '@primereact/types/shared/drawer';

export const defaultProps: useDrawerProps = {
    open: undefined,
    defaultOpen: undefined,
    modal: true,
    blockScroll: false,
    dismissable: true,
    baseZIndex: 0,
    autoZIndex: true,
    appendTo: 'body',
    onOpenChange: undefined
};
