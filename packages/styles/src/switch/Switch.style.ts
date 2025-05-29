import { createStyles } from '@primereact/styles/utils';
import type { SwitchInstance } from '@primereact/types/shared/switch';
import { style } from '@primeuix/styles/toggleswitch';

export const styles = createStyles<SwitchInstance>({
    name: 'toggleswitch',
    style,
    classes: {
        root: ({ state, props }) => [
            'p-toggleswitch p-component',
            {
                'p-toggleswitch-checked': state.checked,
                'p-disabled': props.disabled,
                'p-invalid': props.invalid
            }
        ],
        input: 'p-toggleswitch-input',
        control: 'p-toggleswitch-slider',
        thumb: 'p-toggleswitch-handle'
    },
    inlineStyles: {
        root: { position: 'relative' }
    }
});
