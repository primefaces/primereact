import type { useCheckboxProps } from '@primereact/types/shared/checkbox';

export const defaultProps: useCheckboxProps = {
    __TYPE: 'useCheckbox',
    value: undefined,
    checked: false,
    indeterminate: false,
    binary: false,
    trueValue: true,
    falseValue: false,
    readonly: false,
    disabled: false,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined
};
