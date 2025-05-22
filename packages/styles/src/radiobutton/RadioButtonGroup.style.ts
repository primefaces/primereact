import { createStyles } from '@primereact/styles/utils';
import type { RadioButtonGroupInstance } from '@primereact/types/shared/radiobutton';
import { style } from '@primeuix/styles/radiobuttongroup';

export const groupStyles = createStyles<RadioButtonGroupInstance>({
    name: 'radiobuttongroup',
    style,
    classes: {
        root: 'p-radiobutton-group p-component'
    }
});
