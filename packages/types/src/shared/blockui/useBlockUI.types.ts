/**
 * Props for the useBlockUI hook.
 */
export interface useBlockUIProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useBlockUI';
    /**
     * Controls the blocked state.
     * @defaultValue false
     */
    blocked?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * When enabled, the whole document gets blocked.
     * @defaultValue false
     */
    fullScreen?: boolean | undefined;
}
