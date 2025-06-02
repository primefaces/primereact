/**
 *
 * CardContent is a component that displays a content inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardContent component.
 */
export type CardContentPassThroughType<E> = PassThroughType<CardContentInstance, E>;

/**
 * Defines passthrough(pt) options of CardContent component.
 */
export interface CardContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardContent component.
 */
export interface CardContentProps extends BaseComponentProps<CardContentInstance, unknown, 'div'> {}

/**
 * Defines valid state in CardContent component.
 */
export interface CardContentState {}

/**
 * Defines the methods and properties exposed by CardContent component.
 */
export interface CardContentExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardContent component.
 */
export type CardContentInstance = ComponentInstance<CardContentProps, CardContentState, CardContentExposes, CardContentPassThrough>;
