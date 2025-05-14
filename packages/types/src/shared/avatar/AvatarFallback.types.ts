/**
 *
 * AvatarFallback is a component that displays a fallback icon when the image fails to load or is not provided.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatarfallback
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in AvatarFallback component.
 */
export type AvatarFallbackPassThroughOptionType<E> = PassThroughOptionType<AvatarFallbackInstance, E>;

/**
 * Defines passthrough(pt) options of AvatarFallback component.
 */
export interface AvatarFallbackPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarFallbackPassThroughOptionType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AvatarFallback component.
 */
export interface AvatarFallbackProps extends BaseComponentProps {}

/**
 * Defines valid state in AvatarFallback component.
 */
export interface AvatarFallbackState {}

/**
 * Defines the methods and properties exposed by AvatarFallback component.
 */
export interface AvatarFallbackExposes {}

/**
 * Instance of AvatarFallback component.
 */
export type AvatarFallbackInstance = ComponentInstance<AvatarFallbackProps, AvatarFallbackState, AvatarFallbackExposes>;
