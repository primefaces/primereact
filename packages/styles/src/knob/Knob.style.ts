import { createStyles } from '@primereact/styles/utils';
import type { KnobInstance } from '@primereact/types/shared/knob';
import { style } from '@primeuix/styles/knob';

export const styles = createStyles<KnobInstance>({
    name: 'knob',
    style,
    classes: {
        root: ({ props }) => [
            'p-knob p-component',
            {
                'p-disabled': props.disabled,
                'p-invalid': props.invalid
            }
        ],
        range: 'p-knob-range',
        value: 'p-knob-value',
        text: 'p-knob-text'
    }
});
