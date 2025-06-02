/**
 *
 * ScrollAreaThumbY is a component that displays the content.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollareathumby
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ScrollAreaInstance } from './ScrollArea.types';

/**
 * Defines passthrough(pt) options type in ScrollAreaThumbY component.
 */
export type ScrollAreaThumbYPassThroughType<E> = PassThroughType<ScrollAreaThumbYInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollAreaThumbY component.
 */
export interface ScrollAreaThumbYPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaThumbYPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ScrollAreaThumbY component.
 */
export interface ScrollAreaThumbYProps extends BaseComponentProps<ScrollAreaThumbYInstance> {}

/**
 * Defines valid state in ScrollAreaThumbY component.
 */
export interface ScrollAreaThumbYState {}

/**
 * Defines the methods and properties exposed by ScrollAreaThumbY component.
 */
export interface ScrollAreaThumbYExposes {
    /**
     * Instance of the ScrollArea component.
     */
    scrollarea: ScrollAreaInstance | undefined | null;
}

/**
 * Instance of ScrollAreaThumbY component.
 */
export type ScrollAreaThumbYInstance = ComponentInstance<ScrollAreaThumbYProps, ScrollAreaThumbYState, ScrollAreaThumbYExposes, ScrollAreaThumbYPassThrough>;
