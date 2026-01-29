/**
 *
 * OverlayBadge component is used to display a badge on top of another element.
 *
 * [Live Demo](https://www.primereact.org/badge/)
 *
 * @module OverlayBadge
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useOverlayBadgeExposes, useOverlayBadgeProps, useOverlayBadgeState } from './useOverlayBadge.types';

/**
 * Defines passthrough(pt) options type in OverlayBadge component.
 */
export type OverlayBadgePassThroughType<E> = PassThroughType<OverlayBadgeInstance, E>;

/**
 * Defines passthrough(pt) options of OverlayBadge component.
 */
export interface OverlayBadgePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OverlayBadgePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OverlayBadge component.
 */
export interface OverlayBadgeProps extends BaseComponentProps<OverlayBadgeInstance, useOverlayBadgeProps, OverlayBadgePassThrough> {}

/**
 * Defines valid state in OverlayBadge component.
 * @extends useOverlayBadgeState
 */
export interface OverlayBadgeState extends useOverlayBadgeState {}

/**
 * Defines the methods and properties exposed by OverlayBadge component.
 * @extends useOverlayBadgeExposes
 */
export interface OverlayBadgeExposes extends useOverlayBadgeExposes {}

/**
 * Defines the CSS class names used in the OverlayBadge component.
 */
export const OverlayBadgeClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-overlaybadge'
} as const;

/**
 * Type representing the CSS class names used in the OverlayBadge component.
 */
export type OverlayBadgeClassNamesType = (typeof OverlayBadgeClassNames)[keyof typeof OverlayBadgeClassNames];

/**
 * Instance of OverlayBadge component.
 */
export type OverlayBadgeInstance = ComponentInstance<OverlayBadgeProps, OverlayBadgeState, OverlayBadgeExposes>;
