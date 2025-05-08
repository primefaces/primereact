import * as HeadlessCheckbox from '@primereact/headless/checkbox';
import type { CheckboxProps } from '@primereact/types/shared/checkbox';

export const defaultProps: CheckboxProps = {
    ...HeadlessCheckbox.defaultProps,
    as: 'div',
    value: undefined,
    name: undefined,
    size: undefined,
    variant: undefined,
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false,
    inputId: undefined,
    inputStyle: undefined,
    inputClassName: undefined,
    ariaLabel: undefined,
    ariaLabelledby: undefined,
    onFocus: undefined,
    onBlur: undefined
};
