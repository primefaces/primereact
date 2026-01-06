/**
 *
 * ScrollAreaContent is a component that displays the content.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollareacontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ScrollAreaRootInstance } from './ScrollAreaRoot.types';

/**
 * Defines passthrough(pt) options type in ScrollAreaContent component.
 */
export type ScrollAreaContentPassThroughType<E> = PassThroughType<ScrollAreaContentInstance, E>;

/**
 * Defines passthrough(pt) options of ScrollAreaContent component.
 */
export interface ScrollAreaContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollAreaContentPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ScrollAreaContent component.
 */
export interface ScrollAreaContentProps extends BaseComponentProps<ScrollAreaContentInstance, unknown, ScrollAreaContentPassThrough> {}

/**
 * Defines valid state in ScrollAreaContent component.
 */
export interface ScrollAreaContentState {}

/**
 * Defines the methods and properties exposed by ScrollAreaContent component.
 */
export interface ScrollAreaContentExposes {
    /**
     * Instance of the ScrollArea component.
     */
    scrollarea: ScrollAreaRootInstance | undefined | null;
}

/**
 * Instance of ScrollAreaContent component.
 */
export type ScrollAreaContentInstance = ComponentInstance<ScrollAreaContentProps, ScrollAreaContentState, ScrollAreaContentExposes>;
