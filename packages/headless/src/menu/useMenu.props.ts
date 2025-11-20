import type { useMenuProps } from '@primereact/types/shared/menu';

export const defaultProps: useMenuProps = {
    open: undefined,
    defaultOpen: undefined,
    composite: false,
    appendTo: 'body',
    baseZIndex: 0,
    autoZIndex: true,
    tabIndex: 0,
    onOpenChange: undefined
};
