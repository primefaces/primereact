import { createStyles } from '@primereact/styles/utils';
import type { InputGroupInstance } from '@primereact/types/shared/inputgroup';
import { style } from '@primeuix/styles/inputgroup';

export const styles = createStyles<InputGroupInstance>({
    name: 'inputgroup',
    style,
    classes: {
        root: 'p-inputgroup',
        addon: 'p-inputgroupaddon'
    }
});
