import { BaseComponentProps } from '..';
import { useInputTextProps } from './useInputText.types';

/**
 * InputText component props.
 */
export interface InputTextProps extends BaseComponentProps<useInputTextProps, 'input'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'InputText';
    /**
     * The name of the inputtext.
     */
    name?: string | undefined;
    /**
     * Defines the size of the inputtext.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Callback function that is called when the inputtext is changed.
     */
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
}
