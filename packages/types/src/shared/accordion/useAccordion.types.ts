/**
 *
 * The useAccordion manages the state and functionality of a Accordion component.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module useaccordion
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the accordion's value changes.
 */
export interface useAccordionChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The value of the accordion.
     */
    value: null | undefined | string | number | (string | number)[];
}

/**
 * Defines valid properties in useAccordion.
 */
export interface useAccordionProps {
    /**
     * Default value of the active panel or an array of values in multiple mode.
     * @default null
     */
    defaultValue?: null | undefined | string | number | (string | number)[];
    /**
     * Value of the active panel or an array of values in multiple mode.
     * @default null
     */
    value?: null | undefined | string | number | (string | number)[];
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @default false
     */
    multiple?: boolean | undefined;
    /**
     * Callback fired when the accordion's value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the accordion.
     * @returns void
     */
    onValueChange?: (event: useAccordionChangeEvent) => void;
}

/**
 * Defines valid state in useAccordion.
 */
export interface useAccordionState {
    /**
     * Value of the active panel or an array of values in multiple mode.
     */
    value: null | undefined | string | number | (string | number)[];
}

export type NavigationDirection = 'next' | 'previous' | 'first' | 'last';
/**
 * Defines the methods and properties exposed by useAccordion.
 */
export interface useAccordionExposes {
    /**
     * The state of the useAccordion.
     */
    state: useAccordionState;
    /**
     * The method to update the value of the active panel.
     * @param key The key of the panel.
     * @returns void
     */
    updateValue: (key: null | undefined | string | number) => void;
    /**
     * The method to check if the panel is active.
     * @param key The key of the panel.
     * @returns boolean
     */
    isItemActive: (key: null | undefined | string | number) => boolean;
    /**
     * The method to focus the panel.
     * @param accordionHeaderRef The ref of the accordion header.
     * @param accordionRef The ref of the accordion.
     * @param direction The direction to focus.
     * @returns void
     */
    focusPanel: (accordionHeaderRef: React.RefObject<HTMLElement | null>, accordionRef: React.RefObject<HTMLElement | null>, direction: NavigationDirection) => void;
}

/**
 * Instance of useAccordion headless.
 */
export type useAccordionInstance = HeadlessInstance<useAccordionProps, useAccordionState, useAccordionExposes>;
