import type { useOverlayProps } from '@primereact/types/shared/overlay';

export const defaultProps: useOverlayProps = {
    target: undefined,
    defaultOpen: undefined,
    open: undefined,
    appendTo: 'body',
    type: 'overlay',
    baseZIndex: 0,
    autoZIndex: true,
    closeOnEscape: true,
    onOpenChange: undefined
};
