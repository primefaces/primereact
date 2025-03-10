/**
 * Props for the usePanel hook.
 */
export interface usePanelProps {
    /**
     * Whether the panel is collapsed.
     * @default false
     */
    collapsed?: boolean | undefined;
    /**
     * Indicates if the panel can be toggled.
     * @default false
     */
    toggleable?: boolean | undefined;
    /**
     * Callback triggered when the panel is collapsed.
     */
    onCollapse?: () => void;
    /**
     * Callback triggered when the panel is expanded.
     */
    onExpand?: () => void;
    /**
     * Callback triggered when the panel's toggle state changes.
     */
    onToggle?: () => void;
}
