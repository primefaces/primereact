/**
 *
 * CardBody is a component that displays a body inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardbody
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardBody component.
 */
export type CardBodyPassThroughType<E> = PassThroughType<CardBodyInstance, E>;

/**
 * Defines passthrough(pt) options of CardBody component.
 */
export interface CardBodyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardBodyPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardBody component.
 */
export interface CardBodyProps extends BaseComponentProps<CardBodyInstance, unknown, CardBodyPassThrough, 'div'> {}

/**
 * Defines valid state in CardBody component.
 */
export interface CardBodyState {}

/**
 * Defines the methods and properties exposed by CardBody component.
 */
export interface CardBodyExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardBody component.
 */
export type CardBodyInstance = ComponentInstance<CardBodyProps, CardBodyState, CardBodyExposes>;
