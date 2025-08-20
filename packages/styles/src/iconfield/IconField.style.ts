import { createStyles } from '@primereact/styles/utils';
import type { IconFieldInstance } from '@primereact/types/shared/iconfield';
import { style } from '@primeuix/styles/iconfield';

export const styles = createStyles<IconFieldInstance>({
    name: 'iconfield',
    style,
    classes: {
        root: 'p-iconfield',
        icon: 'p-inputicon'
    }
});
