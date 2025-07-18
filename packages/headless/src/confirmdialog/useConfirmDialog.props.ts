import type { useConfirmDialogProps } from '@primereact/types/shared/confirmdialog';

export const defaultProps: useConfirmDialogProps = {
    open: false,
    draggable: true,
    keepInViewport: true,
    modal: true,
    dismissableMask: false,
    closeOnEscape: true,
    blockScroll: false,
    baseZIndex: 0,
    autoZIndex: true,
    appendTo: 'body',
    onOpenChange: undefined
};
