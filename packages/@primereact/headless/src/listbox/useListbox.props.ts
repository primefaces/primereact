import type { useListboxProps } from '@primereact/types/shared/listbox';

export const defaultProps: useListboxProps = {
    value: undefined,
    defaultValue: undefined,
    options: [],
    optionKey: undefined,
    optionLabel: undefined,
    optionValue: undefined,
    optionDisabled: undefined,
    optionGroupLabel: undefined,
    optionGroupChildren: undefined,
    disabled: false,
    locale: undefined,
    multiple: false,
    metaKeySelection: false,
    autoOptionFocus: true,
    selectOnFocus: false,
    focusOnHover: true,
    onValueChange: undefined
};
