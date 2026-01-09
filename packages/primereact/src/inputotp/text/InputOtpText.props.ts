import type { InputOtpTextProps } from '@primereact/types/shared/inputotp';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultTextProps: InputOtpTextProps = {
    ...(InputTextProps.defaultProps as InputOtpTextProps),
    as: InputText
};
