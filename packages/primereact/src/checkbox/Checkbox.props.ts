import * as HeadlessCheckbox from '@primereact/headless/checkbox';
import type { CheckboxProps } from '@primereact/types/shared/checkbox';

export const defaultProps: CheckboxProps = {
    ...HeadlessCheckbox.defaultProps,
    __TYPE: 'Checkbox',
    name: undefined,
    size: undefined,
    variant: undefined,
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
