import type { usePopoverProps } from '@primereact/types/shared/popover';

export const defaultProps: usePopoverProps = {
    dismissable: true,
    appendTo: 'body',
    baseZIndex: 0,
    autoZIndex: true,
    breakpoints: {},
    closeOnEscape: true,
    defaultOpen: undefined,
    open: undefined,
    onOpenChange: undefined
};
