import * as HeadlessRadioButton from '@primereact/headless/radiobutton';
import type { RadioButtonRootProps } from '@primereact/types/shared/radiobutton';

export const defaultRootProps: RadioButtonRootProps = {
    ...HeadlessRadioButton.defaultProps,
    as: 'div',
    value: undefined,
    name: undefined,
    size: undefined,
    variant: undefined,
    tabIndex: undefined,
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
