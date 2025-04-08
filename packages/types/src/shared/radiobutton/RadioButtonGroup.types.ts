import { BaseComponentProps } from '..';

export interface RadioButtonGroupProps extends BaseComponentProps<{ readonly __TYPE: 'RadioButtonGroup' }, 'div'> {
    readonly __TYPE?: 'RadioButtonGroup';
    /**
     * The name of the checkbox.
     */
    value?: undefined;
    /**
     * The default value of the checkbox.
     */
    defaultValue?: undefined;
    /**
     * Callback function that is called when the checkbox value changes.
     */
    onValueChange?: (event: { value: undefined }) => void;
}
