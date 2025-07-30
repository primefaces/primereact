import { createStyles } from '@primereact/styles/utils';
import type { InputOtpInstance } from '@primereact/types/shared/inputotp';
import { style } from '@primeuix/styles/inputotp';

export const styles = createStyles<InputOtpInstance>({
    name: 'inputotp',
    style,
    classes: {
        root: 'p-inputotp p-component',
        text: 'p-inputotp-input'
    }
});
