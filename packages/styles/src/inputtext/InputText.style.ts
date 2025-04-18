import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/inputtext';
import { isNotEmpty } from '@primeuix/utils/object';

export const classes = {
    root: ({ instance, props }) => [
        'p-inputtext p-component',
        {
            'p-filled': isNotEmpty(props.value),
            'p-inputtext-sm p-inputfield-sm': props.size === 'small',
            'p-inputtext-lg p-inputfield-lg': props.size === 'large',
            'p-invalid': props.invalid,
            'p-variant-filled': (props.variant ?? instance.$primereact.config?.inputVariant) === 'filled'
            // 'p-inputtext-fluid': instance.$fluid
        }
    ]
};

export const styles = createStyles({
    name: 'inputtext',
    style,
    classes
});
