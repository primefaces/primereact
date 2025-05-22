import { createStyles } from '@primereact/styles/utils';
import type { InputTextInstance } from '@primereact/types/shared/inputtext';
import { style } from '@primeuix/styles/inputtext';

export const styles = createStyles<InputTextInstance>({
    name: 'inputtext',
    style,
    classes: {
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
    }
});
