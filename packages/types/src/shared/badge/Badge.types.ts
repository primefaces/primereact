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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useBadgeProps } from './useBadge.types';

/**
 * Defines passthrough(pt) options type in Badge component.
 */
export type BadgePassThroughOptionType<E> = PassThroughOptionType<BadgeInstance, E>;

/**
 * Defines passthrough(pt) options of Badge component.
 */
export interface BadgePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgePassThroughOptionType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Badge component.
 */
export interface BadgeProps extends BaseComponentProps<useBadgeProps> {
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
export type BadgeInstance = ComponentInstance<BadgeProps>;
