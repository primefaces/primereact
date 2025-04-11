import { BaseComponentProps } from '..';
import { useRadioButtonChangeEvent } from './useRadioButton.types';

export interface RadioButtonGroupProps extends BaseComponentProps<{ readonly __TYPE: 'RadioButtonGroup' }, 'div'> {
    readonly __TYPE?: 'RadioButtonGroup';
    /**
     * The name of the checkbox.
     */
    value?: string | undefined;
    /**
     * The default value of the checkbox.
     */
    defaultValue?: string | undefined;
    /**
     * Callback function that is called when the checkbox value changes.
     */
    onValueChange?: (event: useRadioButtonChangeEvent) => void;
}
