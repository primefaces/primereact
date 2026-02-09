import type { useDialogProps } from '@primereact/types/shared/dialog';

export const defaultProps: useDialogProps = {
    open: undefined,
    defaultOpen: undefined,
    draggable: true,
    keepInViewport: true,
    minX: 0,
    minY: 0,
    dismissableMask: false,
    closeOnEscape: true,
    blockScroll: false,
    baseZIndex: 0,
    autoZIndex: true,
    appendTo: 'body',
    fullScreen: false,
    onOpenChange: undefined
};
