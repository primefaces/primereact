import type { useCheckboxProps } from '@primereact/types/shared/checkbox';

export const defaultProps: useCheckboxProps = {
    __TYPE: 'useCheckbox',
    value: undefined,
    defaultChecked: undefined,
    checked: false,
    indeterminate: false,
    trueValue: true,
    falseValue: false,
    readOnly: false,
    disabled: false,
    onCheckedChange: undefined
};
