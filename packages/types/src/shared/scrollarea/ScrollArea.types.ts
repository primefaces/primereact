/**
 *
 * ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollarea
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useScrollAreaExposes, useScrollAreaProps, useScrollAreaState } from './useScrollArea.types';

/**
 * Defines passthrough(pt) options type in ScrollArea component.
 */
export type ScrollAreaPassThroughType<E> = PassThroughType<ScrollAreaInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollArea component.
 */
export interface ScrollAreaPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the viewport's DOM element.
     */
    viewport?: ScrollAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ScrollAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumbY's DOM element.
     */
    thumbY?: ScrollAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumbX's DOM element.
     */
    thumbX?: ScrollAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ScrollArea component.
 */
export interface ScrollAreaProps extends BaseComponentProps<ScrollAreaInstance, useScrollAreaProps> {}

/**
 * Defines valid state in ScrollArea component.
 * @extends useScrollAreaState
 */
export interface ScrollAreaState extends useScrollAreaState {}

/**
 * Defines the methods and properties exposed by ScrollArea component.
 * @extends useScrollAreaExposes
 */
export interface ScrollAreaExposes extends useScrollAreaExposes {}

/**
 * Defines the CSS class names used in the ScrollArea component.
 */
export const ScrollAreaClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-scrollarea',
    /**
     * Class name of the viewport element
     */
    viewport: 'p-scrollpanel-content-container',
    /**
     * Class name of the content element
     */
    content: 'p-scrollpanel-content',
    /**
     * Class name of the thumb x element
     */
    thumbX: 'p-scrollpanel-bar-x',
    /**
     * Class name of the thumb y element
     */
    thumbY: 'p-scrollpanel-bar-y'
} as const;

/**
 * Type representing the CSS class names used in the ScrollArea component.
 */
export type ScrollAreaClassNamesType = (typeof ScrollAreaClassNames)[keyof typeof ScrollAreaClassNames];

/**
 * Instance of ScrollArea component.
 */
export type ScrollAreaInstance = ComponentInstance<ScrollAreaProps, ScrollAreaState, ScrollAreaExposes, ScrollAreaPassThrough>;
