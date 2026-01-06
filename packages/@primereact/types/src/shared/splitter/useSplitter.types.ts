/**
 *
 * The useSplitter manages the functionality of a splitter component.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module usesplitter
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useSplitter.
 */
export interface useSplitterProps {
    /**
     * Orientation of the panels.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Size of the divider in pixels.
     * @default 4
     */
    gutterSize?: number | undefined;
    /**
     * Storage identifier of a stateful Splitter.
     */
    stateKey?: string | undefined;
    /**
     * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @default session
     */
    stateStorage?: 'local' | 'session' | undefined;
    /**
     * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
     * @default 5
     */
    step?: number | undefined;
}

/**
 * Defines valid state in useSplitter.
 */
export interface useSplitterState {
    panels: React.ReactNode[] | undefined;
}

/**
 * Defines the methods and properties exposed by useSplitter.
 */
export interface useSplitterExposes {
    /**
     * The state of the useSplitter.
     */
    state: useSplitterState;
    /**
     * Registers a new panel and returns its index.
     * @returns number
     */
    registerPanel: () => number;
    /**
     * Registers a new gutter and returns its index.
     * @returns number
     */
    registerGutter: () => number;
    /**
     * Registers a new thumb and returns its index.
     * @returns number
     */
    registerThumb: () => number;
    /**
     * Counter tracking the number of panels.
     */
    panelCounter: React.RefObject<number | null>;
    /**
     * Array storing the size of each panel.
     */
    panelSizes: number[] | undefined;
    /**
     * Previous size of the panel during resize.
     */
    prevSize: number | null | undefined;
    /**
     * Reference to the currently active gutter element.
     */
    gutterRef: React.RefObject<HTMLDivElement | null>;
    /**
     * References to all gutter elements.
     */
    gutterRefs: React.RefObject<HTMLDivElement[] | null>;
    /**
     * Handler for resize start events.
     * @param event - Mouse, touch or keyboard event
     * @param index - Index of the gutter
     * @param isKeyDown - Whether it's triggered by keyboard
     * @returns void
     */
    onResizeStart: (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, index: number, isKeyDown: boolean) => void;
    /**
     * Handler for resize events.
     * @param event - Mouse, touch or keyboard event
     * @param step - The resize step value
     * @param isKeyDown - Whether it's triggered by keyboard
     * @returns void
     */
    onResize: (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, step: number, isKeyDown: boolean) => void;
    /**
     * Handler for resize end events.
     */
    onResizeEnd: () => void;
    /**
     * Handler for mouse down events on gutters.
     * @param event - Mouse event
     * @param index - Index of the gutter
     * @returns void
     */
    onGutterMouseDown: (event: React.MouseEvent, index: number) => void;
    /**
     * Handler for touch start events on gutters.
     * @param event - Touch event
     * @param index - Index of the gutter
     * @returns void
     */
    onGutterTouchStart: (event: React.TouchEvent, index: number) => void;
    /**
     * Handler for touch move events on gutters.
     * @param event - Touch event
     * @returns void
     */
    onGutterTouchMove: (event: React.TouchEvent) => void;
    /**
     * Handler for touch end events on gutters.
     * @param event - Touch event
     * @returns void
     */
    onGutterTouchEnd: (event: React.TouchEvent) => void;
    /**
     * Handler for key up events on gutters.
     * @returns void
     */
    onGutterKeyUp: () => void;
    /**
     * Handler for key down events on gutters.
     * @param event - Keyboard event
     * @param index - Index of the gutter
     * @returns void
     */
    onGutterKeyDown: (event: React.KeyboardEvent, index: number) => void;
}

/**
 * Instance of useSplitter headless.
 */
export type useSplitterInstance = HeadlessInstance<useSplitterProps, useSplitterState, useSplitterExposes>;
