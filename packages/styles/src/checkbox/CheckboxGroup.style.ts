import { createStyles } from '@primereact/styles/utils';
import { CheckboxGroupInstance } from '@primereact/types/shared/checkbox';
import { style } from '@primeuix/styles/checkboxgroup';

export const groupStyles = createStyles<CheckboxGroupInstance>({
    name: 'checkboxgroup',
    style,
    classes: {
        root: 'p-checkbox-group p-component'
    }
});
