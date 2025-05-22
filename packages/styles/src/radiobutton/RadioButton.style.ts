import { createStyles } from '@primereact/styles/utils';
import type { RadioButtonInstance } from '@primereact/types/shared/radiobutton';
import { style } from '@primeuix/styles/radiobutton';

export const styles = createStyles<RadioButtonInstance>({
    name: 'radiobutton',
    style,
    classes: {
        root: ({ instance, props }) => [
            'p-radiobutton p-component',
            {
                'p-radiobutton-checked': instance.state.checked === true,
                'p-disabled': instance.group?.props.disabled === true || props.disabled === true,
                'p-invalid': instance.group?.props.invalid ? instance.group?.props.invalid === true : props.invalid === true,
                'p-variant-filled': props.variant === 'filled',
                'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
                'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
            }
        ],
        box: 'p-radiobutton-box',
        input: 'p-radiobutton-input',
        icon: 'p-radiobutton-icon',
        group: 'p-radiobutton-group p-component'
    }
});
