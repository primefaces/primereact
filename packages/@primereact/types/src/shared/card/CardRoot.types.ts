/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module cardroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCardExposes, useCardProps, useCardState } from './useCard.types';

/**
 * Defines passthrough(pt) options type in Card component.
 */
export type CardRootPassThroughType<E> = PassThroughType<CardRootInstance, E>;

/**
 * Defines passthrough(pt) options of Card component.
 */
export interface CardRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CardRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Card component.
 */
export interface CardRootProps extends BaseComponentProps<CardRootInstance, useCardProps, CardRootPassThrough> {}

/**
 * Defines valid state in Card component.
 * @extends useCardState
 */
export interface CardRootState extends useCardState {}

/**
 * Defines the methods and properties exposed by Card component.
 * @extends useCardExposes
 */
export interface CardRootExposes extends useCardExposes {}

/**
 * Instance of Card component.
 */
export type CardRootInstance = ComponentInstance<CardRootProps, CardRootState, CardRootExposes>;
