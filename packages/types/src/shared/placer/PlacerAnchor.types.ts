/**
 *
 * PlacerAnchor component is used to position elements relative to other elements.
 *
 * [Live Demo](https://www.primereact.org/placeranchor/)
 *
 * @module placeranchor
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in PlacerAnchor component.
 */
export type PlacerAnchorPassThroughType<E> = PassThroughType<PlacerAnchorInstance, E>;

/**
 * Defines passthrough(pt) options of PlacerArrow component.
 */
export interface PlacerAnchorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PlacerAnchorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PlacerAnchor component.
 */
export interface PlacerAnchorProps extends BaseComponentProps<PlacerAnchorInstance, unknown, PlacerAnchorPassThrough> {}

/**
 * Defines valid state in PlacerAnchor component.
 */
export interface PlacerAnchorState {}

/**
 * Defines the methods and properties exposed by PlacerAnchor component.
 */
export interface PlacerAnchorExposes {}

/**
 * Instance of PlacerAnchor component.
 */
export type PlacerAnchorInstance = ComponentInstance<PlacerAnchorProps, PlacerAnchorState, PlacerAnchorExposes>;
