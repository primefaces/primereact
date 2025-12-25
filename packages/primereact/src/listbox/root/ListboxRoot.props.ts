import * as HeadlessListbox from '@primereact/headless/listbox';
import type { ListboxRootProps } from '@primereact/types/shared/listbox';

export const defaultRootProps: ListboxRootProps = {
    ...HeadlessListbox.defaultProps,
    as: 'div',
    checkmark: false,
    checkbox: false,
    invalid: false,
    tabIndex: 0
};
