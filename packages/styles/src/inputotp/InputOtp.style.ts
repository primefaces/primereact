import { createStyles } from '@primereact/styles/utils';
import type { InputOtpRootInstance } from '@primereact/types/shared/inputotp';
import { style } from '@primeuix/styles/inputotp';

export const styles = createStyles<InputOtpRootInstance>({
    name: 'inputotp',
    style,
    classes: {
        root: 'p-inputotp p-component',
        text: 'p-inputotp-input'
    }
});
