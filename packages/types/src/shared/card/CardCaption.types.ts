/**
 *
 * CardCaption is a component that displays a caption inside a Card.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardcaption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CardInstance } from './Card.types';

/**
 * Defines passthrough(pt) options type in CardCaption component.
 */
export type CardCaptionPassThroughType<E> = PassThroughType<CardCaptionInstance, E>;

/**
 * Defines passthrough(pt) options of CardCaption component.
 */
export interface CardCaptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardCaptionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CardCaption component.
 */
export interface CardCaptionProps extends BaseComponentProps<CardCaptionInstance, unknown, CardCaptionPassThrough, 'div'> {}

/**
 * Defines valid state in CardCaption component.
 */
export interface CardCaptionState {}

/**
 * Defines the methods and properties exposed by CardCaption component.
 */
export interface CardCaptionExposes {
    /**
     * The Card component instance.
     */
    card: CardInstance | undefined | null;
}

/**
 * Instance of CardCaption component.
 */
export type CardCaptionInstance = ComponentInstance<CardCaptionProps, CardCaptionState, CardCaptionExposes>;
