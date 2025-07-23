import type { useDialogProps } from '@primereact/types/shared/dialog';

export const defaultProps: useDialogProps = {
    open: false,
    defaultOpen: false,
    draggable: true,
    keepInViewport: true,
    minX: 0,
    minY: 0,
    modal: undefined,
    dismissableMask: false,
    closeOnEscape: true,
    blockScroll: false,
    baseZIndex: 0,
    autoZIndex: true,
    appendTo: 'body',
    onOpenChange: undefined
};
