import * as HeadlessInputOtp from '@primereact/headless/inputotp';
import type { InputOtpRootProps } from '@primereact/types/shared/inputotp';

export const defaultRootProps: InputOtpRootProps = {
    ...HeadlessInputOtp.defaultProps,
    as: 'div',
    size: undefined,
    variant: undefined,
    disabled: false
};
