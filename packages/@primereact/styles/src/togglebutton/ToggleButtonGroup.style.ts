import { createStyles } from '@primereact/styles/utils';
import type { ToggleButtonGroupInstance } from '@primereact/types/shared/togglebutton';
import { style } from '@primeuix/styles/selectbutton';

export const groupStyles = createStyles<ToggleButtonGroupInstance>({
    name: 'selectbutton',
    style,
    classes: {
        root: ({ props }) => [
            'p-selectbutton p-togglebutton-group p-component',
            {
                'p-invalid': props.invalid
            }
        ]
    }
});
