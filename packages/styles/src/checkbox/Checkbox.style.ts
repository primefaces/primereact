import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/checkbox';

export const classes = {
    root: ({ props, state }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': state.checked,
            'p-disabled': props.disabled,
            //'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
            //'p-variant-filled': instance.$variant === 'filled',
            'p-checkbox-sm p-inputfield-sm': props.size === 'small',
            'p-checkbox-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

export const styles = createStyles({
    name: 'checkbox',
    style,
    classes
});
