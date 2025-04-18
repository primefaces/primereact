/**
 * Event fired when the inputtext's checked state changes.
 */
export interface useInputTextChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.FormEvent<HTMLInputElement>;
    /**
     * The value of the inputtext.
     */
    value: string;
}

/**
 * Props for the useInputText hook.
 */
export interface useInputTextProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useInputText';
    /**
     * Value of the inputtext.
     */
    value?: string | undefined;
    /**
     * Value of the inputtext.
     */
    defaultValue?: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback fired when the inputText's checked state changes.
     */
    onValueChange?: (event: useInputTextChangeEvent) => void;
}
