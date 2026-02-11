import * as HeadlessPassword from '@primereact/headless/password';
import type { PasswordProps } from '@primereact/types/shared/password';
import { InputText } from 'primereact/inputtext';

export const defaultProps: PasswordProps = {
    ...HeadlessPassword.defaultProps,
    as: InputText
};
