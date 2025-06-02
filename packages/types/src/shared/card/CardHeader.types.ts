/**
 *
 * CardHeader is a component that displays a header inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardHeader component.
 */
export type CardHeaderPassThroughType<E> = PassThroughType<CardHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of CardHeader component.
 */
export interface CardHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardHeader component.
 */
export interface CardHeaderProps extends BaseComponentProps<CardHeaderInstance, unknown, 'div'> {}

/**
 * Defines valid state in CardHeader component.
 */
export interface CardHeaderState {}

/**
 * Defines the methods and properties exposed by CardHeader component.
 */
export interface CardHeaderExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardHeader component.
 */
export type CardHeaderInstance = ComponentInstance<CardHeaderProps, CardHeaderState, CardHeaderExposes, CardHeaderPassThrough>;
