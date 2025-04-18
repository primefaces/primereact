import * as HeadlessRadioButton from '@primereact/headless/radiobutton';
import type { RadioButtonProps } from '@primereact/types/shared/radiobutton';
export const defaultProps: RadioButtonProps = {
    ...HeadlessRadioButton.defaultProps,
    __TYPE: 'RadioButton',
    name: undefined,
    size: undefined,
    invalid: false,
    variant: 'outlined',
    tabIndex: undefined,
    inputId: undefined,
    inputStyle: undefined,
    inputClassName: undefined
};
