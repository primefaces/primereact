import { BaseComponentProps } from '..';
import { useCheckboxProps } from './useCheckbox.types';

/**
 * Checkbox component props.
 *
 * @extends {BaseComponentProps<useCheckboxProps, 'div'>}
 */
export interface CheckboxProps extends BaseComponentProps<useCheckboxProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Checkbox';
    /**
     * Defines the size of the checkbox.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Callback function that is called when the checkbox is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback function that is called when the checkbox loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
