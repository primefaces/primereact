import * as HeadlessCheckbox from '@primereact/headless/checkbox';
import type { CheckboxProps } from '@primereact/types/shared/checkbox';

export const defaultProps: CheckboxProps = {
    ...HeadlessCheckbox.defaultProps,
    __TYPE: 'Checkbox',
    name: undefined,
    value: undefined,
    defaultChecked: undefined,
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
    size: undefined,
    onCheckedChange: undefined
};
