import { createStyles } from '@primereact/styles/utils';
import type { IconFieldRootInstance } from '@primereact/types/shared/iconfield';
import { style } from '@primeuix/styles/iconfield';

export const styles = createStyles<IconFieldRootInstance>({
    name: 'iconfield',
    style,
    classes: {
        root: 'p-iconfield',
        icon: 'p-inputicon'
    }
});
