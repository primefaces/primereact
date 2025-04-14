/**
 * Props for the usePortal hook.
 */
export interface usePortalProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'usePortal';
    /**
     * Whether the portal is visible or not.
     * @defaultValue false
     */
    visible?: boolean;
    /**
     * Callback function to invoke when the portal is mounted.
     */
    onMounted?: (() => void) | null;
    /**
     * Callback function to invoke when the portal is unmounted.
     */
    onUnmounted?: (() => void) | null;
}
