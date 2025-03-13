import * as React from 'react';

/**
 * Event object for the onToggle callback.
 */
export interface usePanelToggleEvent {
    /**
     * The original event that triggered the toggle.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The new value of the panel's toggle state.
     */
    value: boolean;
}

/**
 * Props for the usePanel hook.
 */
export interface usePanelProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'usePanel';
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
    onCollapse?: (event: React.SyntheticEvent) => void;
    /**
     * Callback triggered when the panel is expanded.
     */
    onExpand?: ((event: React.SyntheticEvent) => void) | undefined;
    /**
     * Callback triggered when the panel's toggle state changes.
     */
    onToggle?: ((event: usePanelToggleEvent) => void) | undefined;
}
