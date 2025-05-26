import { createStyles } from '@primereact/styles/utils';
import type { ToggleButtonInstance } from '@primereact/types/shared/togglebutton';
import { style } from '@primeuix/styles/togglebutton';

export const styles = createStyles<ToggleButtonInstance>({
    name: 'togglebutton',
    style,
    classes: {
        root: ({ instance, props, state }) => [
            'p-togglebutton p-component',
            {
                'p-togglebutton-checked': state.pressed,
                'p-invalid': props.invalid,
                'p-togglebutton-sm p-inputfield-sm': (instance.group?.props.size ?? props.size) === 'small',
                'p-togglebutton-lg p-inputfield-lg': (instance.group?.props.size ?? props.size) === 'large'
            }
        ],
        content: 'p-togglebutton-content',
        icon: 'p-togglebutton-icon',
        label: 'p-togglebutton-label'
    }
});
