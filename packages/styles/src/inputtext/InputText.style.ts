import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/inputtext';

export const classes = {
    root: ({ props }) => [
        'p-inputtext p-component',
        {
            //'p-filled': instance.$filled,
            'p-inputtext-sm p-inputfield-sm': props.size === 'small',
            'p-inputtext-lg p-inputfield-lg': props.size === 'large'
            /*'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-inputtext-fluid': instance.$fluid*/
        }
    ]
};

export const styles = createStyles({
    name: 'inputtext',
    style,
    classes
});
