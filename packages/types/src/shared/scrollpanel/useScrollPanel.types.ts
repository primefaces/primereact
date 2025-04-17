/**
 * Props for the useScrollPanel hook.
 */
export interface useScrollPanelProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useScrollPanel';
    /**
     * When present, it adds a custom id to the scrollpanell.
     */
    id?: string | undefined;
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * @defaultValue 5
     */
    step?: number | undefined;
}
