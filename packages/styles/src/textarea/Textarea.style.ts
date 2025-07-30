import { createStyles } from '@primereact/styles/utils';
import type { TextareaInstance } from '@primereact/types/shared/textarea';
import { style } from '@primeuix/styles/textarea';
import { isNotEmpty } from '@primeuix/utils';

export const styles = createStyles<TextareaInstance>({
    name: 'textarea',
    style,
    classes: {
        root: ({ props, attrs }) => [
            'p-textarea p-component',
            {
                'p-filled': isNotEmpty(attrs?.value ?? attrs?.defaultValue),
                'p-textarea-resizable ': props.autoResize,
                'p-textarea-sm p-inputfield-sm': props.size === 'small',
                'p-textarea-lg p-inputfield-lg': props.size === 'large',
                'p-invalid': props.invalid,
                'p-variant-filled': props.variant === 'filled',
                'p-textarea-fluid': props.fluid
            }
        ]
    }
});
