/**
 *
 * CardTitle is a component that displays a title inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardtitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardTitle component.
 */
export type CardTitlePassThroughType<E> = PassThroughType<CardTitleInstance, E>;

/**
 * Defines passthrough(pt) options of CardTitle component.
 */
export interface CardTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardTitle component.
 */
export interface CardTitleProps extends BaseComponentProps<CardTitleInstance, unknown, 'div'> {}

/**
 * Defines valid state in CardTitle component.
 */
export interface CardTitleState {}

/**
 * Defines the methods and properties exposed by CardTitle component.
 */
export interface CardTitleExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardTitle component.
 */
export type CardTitleInstance = ComponentInstance<CardTitleProps, CardTitleState, CardTitleExposes, CardTitlePassThrough>;
