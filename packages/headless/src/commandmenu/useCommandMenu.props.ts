import type { useCommandMenuProps } from '@primereact/types/shared/commandmenu';

export const defaultProps: useCommandMenuProps = {
    selected: undefined,
    defaultSelected: '',
    onSelectedChange: undefined,
    selectOnHover: true,
    filter: undefined,
    loop: false,
    jump: 5
};
