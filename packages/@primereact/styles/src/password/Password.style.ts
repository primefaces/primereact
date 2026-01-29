import { createStyles } from '@primereact/styles/utils';
import type { PasswordInstance } from '@primereact/types/shared/password';
import { style } from '@primeuix/styles/password';

export const styles = createStyles<PasswordInstance>({
    name: 'password',
    style,
    classes: {
        root: 'p-password p-component'
    }
});
