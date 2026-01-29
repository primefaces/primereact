import * as HeadlessPassword from '@primereact/headless/password';
import type { PasswordRootProps } from '@primereact/types/shared/password';
import { InputText } from 'primereact/inputtext';

export const defaultProps: PasswordRootProps = {
    ...HeadlessPassword.defaultProps,
    as: InputText
};
