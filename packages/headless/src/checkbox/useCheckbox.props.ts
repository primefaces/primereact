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
    required: false,
    tabIndex: undefined,
    inputId: undefined,
    inputClassName: undefined,
    inputStyle: undefined,
    ariaLabelledby: undefined,
    ariaLabel: undefined,
    invalid: false,
    variant: undefined,
    disabled: false,

    onCheckedChange: undefined,
    onFocus: undefined,
    onBlur: undefined
};
