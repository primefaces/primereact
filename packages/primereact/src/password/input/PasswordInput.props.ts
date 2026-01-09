import type { PasswordInputProps } from '@primereact/types/shared/password';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultInputProps: PasswordInputProps = {
    ...(InputTextProps.defaultProps as PasswordInputProps),
    as: InputText
};
