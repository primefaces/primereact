import type { PasswordInputProps } from '@primereact/types/shared/password';
import * as InputText from 'primereact/inputtext';

export const defaultInputProps: PasswordInputProps = {
    ...(InputText.defaultProps as PasswordInputProps)
};
