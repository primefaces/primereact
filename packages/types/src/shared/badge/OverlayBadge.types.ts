/**
 *
 * OverlayBadge component is used to display a badge on top of another element.
 *
 * [Live Demo](https://www.primereact.org/badge/)
 *
 * @module overlaybadge
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in OverlayBadge component.
 */
export type OverlayBadgePassThroughOptionType<E> = PassThroughOptionType<OverlayBadgeInstance, E>;

/**
 * Defines passthrough(pt) options of OverlayBadge component.
 */
export interface OverlayBadgePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OverlayBadgePassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in OverlayBadge component.
 */
export interface OverlayBadgeProps extends BaseComponentProps {}

/**
 * Defines valid state in OverlayBadge component.
 */
export interface OverlayBadgeState {}

/**
 * Defines the methods and properties exposed by OverlayBadge component.
 */
export interface OverlayBadgeExposes {}

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
