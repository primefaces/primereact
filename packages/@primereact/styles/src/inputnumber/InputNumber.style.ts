import { createStyles } from '@primereact/styles/utils';
import type { InputNumberInstance } from '@primereact/types/shared/inputnumber';
import { style } from '@primeuix/styles/inputnumber';

export const styles = createStyles<InputNumberInstance>({
    name: 'inputnumber',
    style,
    classes: {
        root: ({ instance, props }) => [
            'p-inputnumber p-component p-inputwrapper',
            {
                'p-invalid': props.invalid,
                'p-inputwrapper-filled': props.value != null || props.defaultValue != null || props.allowEmpty === false,
                'p-inputwrapper-focus': instance.focused,
                'p-inputnumber-fluid': props.fluid
            }
        ],
        text: 'p-inputnumber-input'
    }
});
