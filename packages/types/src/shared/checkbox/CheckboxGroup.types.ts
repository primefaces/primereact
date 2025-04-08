import { BaseComponentProps } from '..';

/**
 * Checkbox component props.
 */
export interface CheckboxGroupProps extends BaseComponentProps<{ readonly __TYPE: 'CheckboxGroup' }, 'div', ['defaultValue']> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'CheckboxGroup';
    /**
     * The name of the checkbox.
     */
    value?: unknown;
    /**
     * The default value of the checkbox.
     */
    defaultValue?: unknown;
    /**
     * Callback function that is called when the checkbox value changes.
     */
    onValueChange?: (event: { value: unknown }) => void;
}
