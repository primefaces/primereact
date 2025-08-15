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
                'p-inputnumber-stacked': props.buttonLayout === 'stacked',
                'p-inputnumber-horizontal': props.buttonLayout === 'horizontal',
                'p-inputnumber-vertical': props.buttonLayout === 'vertical',
                'p-inputnumber-fluid': props.fluid
            }
        ],
        text: 'p-inputnumber-input',
        buttonGroup: 'p-inputnumber-button-group',
        increment: ({ instance, props }) => [
            'p-inputnumber-button p-inputnumber-increment-button',
            {
                'p-disabled': props.max !== null && instance.maxBoundry()
            }
        ],
        decrement: ({ instance, props }) => [
            'p-inputnumber-button p-inputnumber-decrement-button',
            {
                'p-disabled': props.min !== null && instance.minBoundry()
            }
        ]
    }
});
