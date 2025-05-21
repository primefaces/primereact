/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * [Live Demo](https://www.primereact.org/skeleton/)
 *
 * @module skeleton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useSkeletonExposes, useSkeletonProps, useSkeletonState } from './useSkeleton.types';

/**
 * Defines passthrough(pt) options type in Skeleton component.
 */
export type SkeletonPassThroughOptionType<E> = PassThroughOptionType<SkeletonInstance, E>;

/**
 * Defines passthrough(pt) options of Skeleton component.
 */
export interface SkeletonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SkeletonPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Skeleton component.
 */
export interface SkeletonProps extends BaseComponentProps<useSkeletonProps> {
    /**
     * Shape of the element.
     * @default rectangle
     */
    shape?: 'rectangle' | 'circle' | undefined;
    /**
     * Size of the Circle or Square.
     */
    size?: string | undefined;
    /**
     * Width of the element.
     * @default 100%
     */
    width?: string | undefined;
    /**
     * Height of the element.
     * @default 1rem
     */
    height?: string | undefined;
    /**
     * Border radius of the element, defaults to value from theme.
     */
    borderRadius?: string | undefined;
    /**
     * Type of the animation.
     * @default wave
     */
    animation?: 'wave' | 'none' | undefined;
}

/**
 * Defines valid state in Skeleton component.
 * @extends useSkeletonState
 */
export interface SkeletonState extends useSkeletonState {}

/**
 * Defines the methods and properties exposed by Skeleton component.
 * @extends useSkeletonExposes
 */
export interface SkeletonExposes extends useSkeletonExposes {}

/**
 * Defines the CSS class names used in the Skeleton component.
 */
export const SkeletonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-skeleton'
} as const;

/**
 * Type representing the CSS class names used in the Skeleton component.
 */
export type SkeletonClassNamesType = (typeof SkeletonClassNames)[keyof typeof SkeletonClassNames];

/**
 * Instance of Skeleton component.
 */
export type SkeletonInstance = ComponentInstance<SkeletonProps, SkeletonState, SkeletonExposes>;
