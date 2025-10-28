import type { useOverlayProps } from '@primereact/types/shared/overlay';

export const defaultProps: useOverlayProps = {
    target: undefined,
    appendTo: 'body',
    baseZIndex: 0,
    autoZIndex: true,
    closeOnEscape: true,
    defaultOpen: undefined,
    open: undefined,
    onOpenChange: undefined
};
