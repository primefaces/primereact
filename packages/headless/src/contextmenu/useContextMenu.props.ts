import type { useContextMenuProps } from '@primereact/types/shared/contextmenu';

export const defaultProps: useContextMenuProps = {
    open: false,
    defaultOpen: false,
    baseZIndex: 0,
    autoZIndex: true,
    tabIndex: 0,
    appendTo: 'body',
    onOpenChange: undefined
};
