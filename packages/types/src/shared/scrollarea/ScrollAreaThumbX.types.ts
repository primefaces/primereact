/**
 *
 * ScrollAreaThumbX is a component that displays the content.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollareathumbx
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ScrollAreaInstance } from './ScrollArea.types';

/**
 * Defines passthrough(pt) options type in ScrollAreaThumbX component.
 */
export type ScrollAreaThumbXPassThroughType<E> = PassThroughType<ScrollAreaThumbXInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollAreaThumbX component.
 */
export interface ScrollAreaThumbXPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaThumbXPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ScrollAreaThumbX component.
 */
export interface ScrollAreaThumbXProps extends BaseComponentProps<ScrollAreaThumbXInstance, unknown, ScrollAreaThumbXPassThrough> {}

/**
 * Defines valid state in ScrollAreaThumbX component.
 */
export interface ScrollAreaThumbXState {}

/**
 * Defines the methods and properties exposed by ScrollAreaThumbX component.
 */
export interface ScrollAreaThumbXExposes {
    /**
     * Instance of the ScrollArea component.
     */
    scrollarea: ScrollAreaInstance | undefined | null;
}

/**
 * Instance of ScrollAreaThumbX component.
 */
export type ScrollAreaThumbXInstance = ComponentInstance<ScrollAreaThumbXProps, ScrollAreaThumbXState, ScrollAreaThumbXExposes>;
