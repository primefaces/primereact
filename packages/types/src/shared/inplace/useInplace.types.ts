export interface useInplaceChangeEvent {
    /**
     * The active state of the inplace.
     */
    active: boolean;
}
/**
 * Props for the useInplace hook.
 */
export interface useInplaceProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useInplace';
    /**
     * Whether the content is displayed or not.
     * @default false
     */
    active?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback function that is called when the element is clicked.
     */
    onActiveChange?: (active: boolean | undefined) => void;
}
