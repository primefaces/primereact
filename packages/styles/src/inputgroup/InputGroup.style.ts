import { createStyles } from '@primereact/styles/utils';
import type { InputGroupRootInstance } from '@primereact/types/shared/inputgroup';
import { style } from '@primeuix/styles/inputgroup';

export const styles = createStyles<InputGroupRootInstance>({
    name: 'inputgroup',
    style,
    classes: {
        root: 'p-inputgroup',
        addon: 'p-inputgroupaddon'
    }
});
