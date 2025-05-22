import { createStyles } from '@primereact/styles/utils';
import type { ButtonGroupInstance } from '@primereact/types/shared/button';
import { style } from '@primeuix/styles/buttongroup';

export const groupStyles = createStyles<ButtonGroupInstance>({
    name: 'buttongroup',
    style,
    classes: {
        root: 'p-buttongroup p-component'
    }
});
