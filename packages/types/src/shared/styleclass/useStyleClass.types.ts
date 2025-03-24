import * as React from 'react';

/**
 * Props for the useStyleClass hook.
 */
export interface useStyleClassProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useStyleClass';
    /**
     * A React reference to DOM element that need to specify.
     */
    nodeRef?: React.RefObject<React.ReactNode>;
    /**
     * Selector to define the target element.
     */
    selector?: '@next' | '@prev' | '@parent' | '@grandparent' | string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterFromClassName?: string | undefined;
    /**
     * Style class to add during enter animation.
     */
    enterActiveClassName?: string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterToClassName?: string | undefined;
    /**
     * Style class to add when item begins to get hidden.
     */
    leaveFromClassName?: string | undefined;
    /**
     * Style class to add during leave animation.
     */
    leaveActiveClassName?: string | undefined;
    /**
     * Style class to add when leave animation is completed.
     */
    leaveToClassName?: string | undefined;
    /**
     * Style class to apply when the component is hidden.
     */
    hiddenClassName?: string | undefined;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @defaultValue false
     */
    hideOnOutsideClick?: boolean | undefined;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     */
    toggleClassName?: string | undefined;
}
