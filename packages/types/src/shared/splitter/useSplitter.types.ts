/**
 * Props for the useSplitter hook.
 */
export interface useSplitterProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useSplitter';
    /**
     * Orientation of the panels.
     * @defaultValue horizontal
     */
    layout?: 'horizontal' | 'vertical' | undefined;
    /**
     * Size of the divider in pixels.
     * @defaultValue 4
     */
    gutterSize?: number | undefined;
    /**
     * Storage identifier of a stateful Splitter.
     */
    stateKey?: string | undefined;
    /**
     * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @defaultValue session
     */
    stateStorage?: 'local' | 'session' | undefined;
    /**
     * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
     * @defaultValue 5
     */
    step?: number | undefined;
}
