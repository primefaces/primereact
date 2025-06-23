/**
 *
 * CardFooter is a component that displays a footer inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardFooter component.
 */
export type CardFooterPassThroughType<E> = PassThroughType<CardFooterInstance, E>;

/**
 * Defines passthrough(pt) options of CardFooter component.
 */
export interface CardFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardFooter component.
 */
export interface CardFooterProps extends BaseComponentProps<CardFooterInstance, unknown, CardFooterPassThrough, 'div'> {}

/**
 * Defines valid state in CardFooter component.
 */
export interface CardFooterState {}

/**
 * Defines the methods and properties exposed by CardFooter component.
 */
export interface CardFooterExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardFooter component.
 */
export type CardFooterInstance = ComponentInstance<CardFooterProps, CardFooterState, CardFooterExposes>;
