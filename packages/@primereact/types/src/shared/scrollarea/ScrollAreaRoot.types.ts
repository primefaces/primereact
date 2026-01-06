/**
 *
 * ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollarearoot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useScrollAreaExposes, useScrollAreaProps, useScrollAreaState } from './useScrollArea.types';

/**
 * Defines passthrough(pt) options type in ScrollArea component.
 */
export type ScrollAreaRootPassThroughType<E> = PassThroughType<ScrollAreaRootInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollArea component.
 */
export interface ScrollAreaRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the viewport's DOM element.
     */
    viewport?: ScrollAreaRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ScrollAreaRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumbY's DOM element.
     */
    thumbY?: ScrollAreaRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumbX's DOM element.
     */
    thumbX?: ScrollAreaRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ScrollArea component.
 */
export interface ScrollAreaRootProps extends BaseComponentProps<ScrollAreaRootInstance, useScrollAreaProps, ScrollAreaRootPassThrough> {}

/**
 * Defines valid state in ScrollArea component.
 * @extends useScrollAreaState
 */
export interface ScrollAreaRootState extends useScrollAreaState {}

/**
 * Defines the methods and properties exposed by ScrollArea component.
 * @extends useScrollAreaExposes
 */
export interface ScrollAreaRootExposes extends useScrollAreaExposes {}

/**
 * Instance of ScrollArea component.
 */
export type ScrollAreaRootInstance = ComponentInstance<ScrollAreaRootProps, ScrollAreaRootState, ScrollAreaRootExposes>;
