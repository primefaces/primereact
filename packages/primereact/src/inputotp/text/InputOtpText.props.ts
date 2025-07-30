import type { InputOtpTextProps } from '@primereact/types/shared/inputotp';
import * as InputText from 'primereact/inputtext';

export const defaultTextProps: InputOtpTextProps = {
    ...(InputText.defaultProps as InputOtpTextProps)
};
