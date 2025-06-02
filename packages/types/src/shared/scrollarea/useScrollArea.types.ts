/**
 *
 * The useScrollArea manages the state and functionality of a scrollarea component.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module usescrollarea
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useScrollArea.
 */
export interface useScrollAreaProps {
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * @default 5
     */
    step?: number | undefined;
}

/**
 * Defines valid state in useScrollArea.
 */
export interface useScrollAreaState {
    /**
     * Current orientation of scrolling, either "vertical" or "horizontal".
     */
    orientationState: string | undefined;
}

/**
 * Defines the methods and properties exposed by useScrollArea.
 */
export interface useScrollAreaExposes {
    /**
     * The state of the useScrollArea.
     */
    state: useScrollAreaState;
    /**
     * Reference to the scroll content element.
     */
    contentRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the horizontal scrollbar thumb element.
     */
    thumbXRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the vertical scrollbar thumb element.
     */
    thumbYRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Current horizontal scroll position.
     */
    lastScrollLeft: number | undefined;
    /**
     * Current vertical scroll position.
     */
    lastScrollTop: number | undefined;
    /**
     * Event handler for content scrolling to update thumb positions.
     */
    onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
    /**
     * Event handler for horizontal scrollbar thumb drag interactions.
     */
    onXBarMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Event handler for vertical scrollbar thumb drag interactions.
     */
    onYBarMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Event handler when the scrollbar thumb receives focus.
     */
    onFocus: (event: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Event handler when the scrollbar thumb loses focus.
     */
    onBlur: () => void;
    /**
     * Event handler for keyboard navigation to scroll content.
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * Event handler to stop continuous scrolling when key is released.
     */
    onKeyUp: () => void;
}

/**
 * Instance of useScrollArea headless.
 */
export type useScrollAreaInstance = HeadlessInstance<useScrollAreaProps, useScrollAreaState, useScrollAreaExposes>;
