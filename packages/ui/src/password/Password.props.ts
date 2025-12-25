import * as HeadlessPassword from '@primereact/headless/password';
import type { PasswordProps } from '@primereact/types/shared/password';

export const defaultProps: PasswordProps = {
    ...HeadlessPassword.defaultProps,
    as: 'div',
    name: undefined,
    placeholder: undefined,
    invalid: undefined,
    variant: undefined,
    fluid: undefined,
    required: undefined,
    disabled: undefined,
    readOnly: undefined,
    size: undefined,
    inputId: undefined,
    inputClass: undefined
};
