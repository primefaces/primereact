import { createStyles } from '@primereact/styles/utils';
import type { InputNumberInstance } from '@primereact/types/shared/inputnumber';
import { style } from '@primeuix/styles/inputnumber';

export const styles = createStyles<InputNumberInstance>({
    name: 'inputnumber',
    style,
    classes: {
        root: 'p-inputnumber p-component'
    }
});
