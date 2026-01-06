/**
 *
 * Badge is a small status indicator for another element.
 *
 * [Live Demo](https://www.primereact.org/badge/)
 *
 * @module badgeroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useBadgeExposes, useBadgeProps, useBadgeState } from './useBadge.types';

/**
 * Defines passthrough(pt) options type in Badge component.
 */
export type BadgeRootPassThroughType<E> = PassThroughType<BadgeRootInstance, E>;

/**
 * Defines passthrough(pt) options of Badge component.
 */
export interface BadgeRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgeRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Badge component.
 */
export interface BadgeRootProps extends BaseComponentProps<BadgeRootInstance, useBadgeProps, BadgeRootPassThrough> {
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
export interface BadgeRootState extends useBadgeState {}

/**
 * Defines the methods and properties exposed by Badge component.
 */
export interface BadgeRootExposes extends useBadgeExposes {}

/**
 * Instance of Badge component.
 */
export type BadgeRootInstance = ComponentInstance<BadgeRootProps, BadgeRootState, BadgeRootExposes>;
