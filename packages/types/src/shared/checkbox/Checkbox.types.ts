import { BaseComponentProps } from '..';
import { useCheckboxProps } from './useCheckbox.types';

/**
 * Checkbox component props.
 */
export interface CheckboxProps extends BaseComponentProps<useCheckboxProps> {
    /**
     * The name of the checkbox.
     */
    name?: string | undefined;
    /**
     * Defines the size of the checkbox.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: string | object | undefined;
    /**
     * Style class of the input field.
     */
    inputClassName?: object | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Callback function that is called when the checkbox is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback function that is called when the checkbox loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
