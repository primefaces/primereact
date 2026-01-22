import { createStyles } from '@primereact/styles/utils';
import type { RadioButtonGroupInstance } from '@primereact/types/shared/radiobuttongroup';
import { style } from '@primeuix/styles/radiobuttongroup';

export const styles = createStyles<RadioButtonGroupInstance>({
    name: 'radiobuttongroup',
    style,
    classes: {
        root: 'p-radiobutton-group p-component'
    }
});
