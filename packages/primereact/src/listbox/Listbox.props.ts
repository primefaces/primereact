import * as HeadlessListbox from '@primereact/headless/listbox';
import type { ListboxProps } from '@primereact/types/shared/listbox';

export const defaultProps: ListboxProps = {
    ...HeadlessListbox.defaultProps,
    as: 'div',
    checkmark: false,
    checkbox: false,
    invalid: false,
    tabIndex: 0
};
