import { createStyles } from '@primereact/styles/utils';
import type { CheckboxGroupInstance } from '@primereact/types/shared/checkboxgroup';
import { style } from '@primeuix/styles/checkboxgroup';

export const styles = createStyles<CheckboxGroupInstance>({
    name: 'checkboxgroup',
    style,
    classes: {
        root: 'p-checkbox-group p-component'
    }
});
