import * as HeadlessInputNumber from '@primereact/headless/inputnumber';
import type { InputNumberProps } from '@primereact/types/shared/inputnumber';

export const defaultProps: InputNumberProps = {
    ...HeadlessInputNumber.defaultProps,
    as: 'span',
    inputId: undefined,
    size: undefined,
    variant: undefined,
    disabled: false,
    readOnly: false,
    invalid: undefined,
    fluid: undefined,
    placeholder: undefined
};
