/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module card
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCardExposes, useCardProps, useCardState } from './useCard.types';

/**
 * Defines passthrough(pt) options type in Card component.
 */
export type CardPassThroughType<E> = PassThroughType<CardInstance, E>;

/**
 * Defines passthrough(pt) options of Card component.
 */
export interface CardPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Card component.
 */
export interface CardProps extends BaseComponentProps<CardInstance, useCardProps, CardPassThrough> {}

/**
 * Defines valid state in Card component.
 * @extends useCardState
 */
export interface CardState extends useCardState {}

/**
 * Defines the methods and properties exposed by Card component.
 * @extends useCardExposes
 */
export interface CardExposes extends useCardExposes {}

/**
 * Defines the CSS class names used in the Card component.
 */
export const CardClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-card',
    /**
     * Class name of the header element
     */
    header: 'p-card-header',
    /**
     * Class name of the body element
     */
    body: 'p-card-body',
    /**
     * Class name of the caption element
     */
    caption: 'p-card-caption',
    /**
     * Class name of the title element
     */
    title: 'p-card-title',
    /**
     * Class name of the subtitle element
     */
    subtitle: 'p-card-subtitle',
    /**
     * Class name of the content element
     */
    content: 'p-card-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-card-footer'
} as const;

/**
 * Type representing the CSS class names used in the Card component.
 */
export type CardClassNamesType = (typeof CardClassNames)[keyof typeof CardClassNames];

/**
 * Instance of Card component.
 */
export type CardInstance = ComponentInstance<CardProps, CardState, CardExposes>;
