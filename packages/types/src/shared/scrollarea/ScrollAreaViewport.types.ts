/**
 *
 * ScrollAreaViewport is a component that displays a viewport for the content.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollareaviewport
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ScrollAreaInstance } from './ScrollArea.types';

/**
 * Defines passthrough(pt) options type in ScrollAreaViewport component.
 */
export type ScrollAreaViewportPassThroughType<E> = PassThroughType<ScrollAreaViewportInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollAreaViewport component.
 */
export interface ScrollAreaViewportPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaViewportPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ScrollAreaViewport component.
 */
export interface ScrollAreaViewportProps extends BaseComponentProps<ScrollAreaViewportInstance> {}

/**
 * Defines valid state in ScrollAreaViewport component.
 */
export interface ScrollAreaViewportState {}

/**
 * Defines the methods and properties exposed by ScrollAreaViewport component.
 */
export interface ScrollAreaViewportExposes {
    /**
     * Instance of the ScrollArea component.
     */
    scrollarea: ScrollAreaInstance | undefined | null;
}

/**
 * Instance of ScrollAreaViewport component.
 */
export type ScrollAreaViewportInstance = ComponentInstance<ScrollAreaViewportProps, ScrollAreaViewportState, ScrollAreaViewportExposes, ScrollAreaViewportPassThrough>;
