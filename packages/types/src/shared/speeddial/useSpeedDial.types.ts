/**
 *
 * The useSpeedDial manages the state and functionality of a speeddial component.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module usespeeddial
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the speeddial's visibility changes.
 */
export interface useSpeedDialChangeEvent {
    /**
     * The value of the speeddial.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in useSpeedDial.
 */
export interface useSpeedDialProps {
    /**
     * Whether the speeddial is visible or not.
     * @default false
     */
    visible?: boolean | undefined;
    /**
     * Whether the speeddial is visible or not.
     * @default false
     */
    defaultVisible?: boolean | undefined;
    /**
     * Specifies the opening direction of actions.
     * @default up
     */
    direction?: 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' | undefined;
    /**
     * Transition delay step for each action item.
     * @default 30
     */
    transitionDelay?: number | undefined;
    /**
     * Specifies the opening type of actions.
     * @default linear
     */
    type?: 'linear' | 'circle' | 'semi-circle' | 'quarter-circle' | undefined;
    /**
     * Radius for *circle types.
     * @default 0
     */
    radius?: number | undefined;
    /**
     * Whether the actions close when clicked outside.
     * @default true
     */
    hideOnClickOutside?: boolean | undefined;
    /**
     * Callback fired when the speeddial's visibility changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the speeddial.
     * @returns void
     */
    onVisibleChange?: (event: useSpeedDialChangeEvent) => void;
}

/**
 * Defines valid state in useSpeedDial.
 */
export interface useSpeedDialState {
    /**
     * Visible state of the component.
     */
    visible: boolean;
    /**
     * Current focused option index.
     */
    focusedOptionIndex: string | number;
}

/**
 * Defines the methods and properties exposed by useSpeedDial.
 */
export interface useSpeedDialExposes {
    /**
     * The state of the useSpeedDial.
     */
    state: useSpeedDialState;
    /**
     * Reference to the currently list element.
     */
    listRef: React.RefObject<HTMLUListElement | null>;
    /**
     * Registers a new item and returns its index.
     * @returns number
     */
    registerItem: () => number;
    /**
     * Handler for item's style
     * @param index - Index of the item
     * @returns React.CSSProperties
     */
    getItemStyle: (index: number) => React.CSSProperties;
    /**
     * Handler for blur event.
     * @param index - Index of the item
     * @returns void
     */
    onBlur: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * Handler for keydown events.
     * @param event - Touch event
     * @returns void
     */
    onKeyDown: (event: React.KeyboardEvent) => void;
    /**
     * Handler for click event.
     * @returns void
     */
    onClick: () => void;
    /**
     * Handler for keydown events on toggler.
     * @param event - Touch event
     * @returns void
     */
    onTogglerKeydown: (event: React.KeyboardEvent) => void;
    /**
     * Handler for click event on items.
     * @param event - Click event
     * @returns void
     */
    onItemClick: (e: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * Handler for keydown event on items.
     * @param event - Keyboard event
     * @returns void
     */
    onItemKeyDown: (e: React.KeyboardEvent) => void;
}

/**
 * Instance of useSpeedDial headless.
 */
export type useSpeedDialInstance = HeadlessInstance<useSpeedDialProps, useSpeedDialState, useSpeedDialExposes>;
