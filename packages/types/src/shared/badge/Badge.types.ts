/**
 *
 * Badge is a small status indicator for another element.
 *
 * [Live Demo](https://www.primereact.org/badge/)
 *
 * @module badge
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useBadgeExposes, useBadgeProps, useBadgeState } from './useBadge.types';

/**
 * Defines passthrough(pt) options type in Badge component.
 */
export type BadgePassThroughType<E> = PassThroughType<BadgeInstance, E>;

/**
 * Defines passthrough(pt) options of Badge component.
 */
export interface BadgePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Badge component.
 */
export interface BadgeProps extends BaseComponentProps<BadgeInstance, useBadgeProps> {
    /**
     * Defines the shape of the badge.
     */
    shape?: 'circle' | undefined;
    /**
     * Size of the badge.
     */
    size?: 'small' | 'large' | 'xlarge' | undefined;
    /**
     * Severity type of the badge.
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | undefined;
}

/**
 * Defines valid state in Badge component.
 */
export interface BadgeState extends useBadgeState {}

/**
 * Defines the methods and properties exposed by Badge component.
 */
export interface BadgeExposes extends useBadgeExposes {}

/**
 * Defines the CSS class names used in the Badge component.
 */
export const BadgeClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-badge'
} as const;

/**
 * Type representing the CSS class names used in the Badge component.
 */
export type BadgeClassNamesType = (typeof BadgeClassNames)[keyof typeof BadgeClassNames];

/**
 * Instance of Badge component.
 */
export type BadgeInstance = ComponentInstance<BadgeProps, BadgeState, BadgeExposes, BadgePassThrough>;
