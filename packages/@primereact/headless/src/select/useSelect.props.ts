import type { useSelectProps } from '@primereact/types/shared/select';

export const defaultProps: useSelectProps = {
    value: undefined,
    defaultValue: undefined,
    filterValue: undefined,
    defaultFilterValue: '',
    open: undefined,
    defaultOpen: undefined,
    options: [],
    optionKey: undefined,
    optionLabel: undefined,
    optionValue: undefined,
    optionDisabled: undefined,
    optionGroupLabel: undefined,
    optionGroupChildren: undefined,
    multiple: false,
    disabled: false,
    locale: undefined,
    autoOptionFocus: true,
    selectOnFocus: false,
    focusOnHover: true,
    appendTo: 'body',
    onValueChange: undefined,
    onFilterValueChange: undefined,
    onOpenChange: undefined
};
