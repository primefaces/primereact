import { createStyles } from '@primereact/styles/utils';
import type { CheckboxInstance } from '@primereact/types/shared/checkbox';
import { style } from '@primeuix/styles/checkbox';

export const styles = createStyles<CheckboxInstance>({
    name: 'checkbox',
    style,
    classes: {
        root: ({ props, state, instance }) => [
            'p-checkbox p-component',
            {
                'p-checkbox-checked': state.checked,
                'p-disabled': props.disabled,
                'p-invalid': props.invalid,
                'p-variant-filled': (props.variant ?? instance.$primereact.config?.inputVariant) === 'filled',
                'p-checkbox-sm p-inputfield-sm': props.size === 'small',
                'p-checkbox-lg p-inputfield-lg': props.size === 'large'
            }
        ],
        box: 'p-checkbox-box',
        input: 'p-checkbox-input',
        icon: 'p-checkbox-icon'
    }
});
