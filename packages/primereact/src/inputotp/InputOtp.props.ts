import * as HeadlessInputOtp from '@primereact/headless/inputotp';
import type { InputOtpProps } from '@primereact/types/shared/inputotp';

export const defaultProps: InputOtpProps = {
    ...HeadlessInputOtp.defaultProps,
    as: 'div'
};
