/**
 *
 * CardSubtitle is a component that displays a subtitle inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardsubtitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardSubtitle component.
 */
export type CardSubtitlePassThroughType<E> = PassThroughType<CardSubtitleInstance, E>;

/**
 * Defines passthrough(pt) options of CardSubtitle component.
 */
export interface CardSubtitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardSubtitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardSubtitle component.
 */
export interface CardSubtitleProps extends BaseComponentProps<CardSubtitleInstance, unknown, 'div'> {}

/**
 * Defines valid state in CardSubtitle component.
 */
export interface CardSubtitleState {}

/**
 * Defines the methods and properties exposed by CardSubtitle component.
 */
export interface CardSubtitleExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardSubtitle component.
 */
export type CardSubtitleInstance = ComponentInstance<CardSubtitleProps, CardSubtitleState, CardSubtitleExposes, CardSubtitlePassThrough>;
