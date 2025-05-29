import { createStyles } from '@primereact/styles/utils';
import type { InputTextInstance } from '@primereact/types/shared/inputtext';
import { style } from '@primeuix/styles/inputtext';
import { isNotEmpty } from '@primeuix/utils';

export const styles = createStyles<InputTextInstance>({
    name: 'inputtext',
    style,
    classes: {
        root: ({ props, attrs }) => [
            'p-inputtext p-component',
            {
                //'p-filled': props.variant === 'filled',
                'p-inputtext-sm p-inputfield-sm': props.size === 'small',
                'p-inputtext-lg p-inputfield-lg': props.size === 'large',
                'p-invalid': props.invalid,
                'p-variant-filled': props.variant === 'filled',
                'p-inputtext-fluid': props.fluid,
                'p-filled': isNotEmpty(attrs?.value)
            }
        ]
    }
});
