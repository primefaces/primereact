/**
 *
 * AvatarImage is a component that displays an image inside an Avatar.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatarimage
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in AvatarImage component.
 */
export type AvatarImagePassThroughOptionType<E> = PassThroughOptionType<AvatarImageInstance, E>;

/**
 * Defines passthrough(pt) options of AvatarImage component.
 */
export interface AvatarImagePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarImagePassThroughOptionType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in AvatarImage component.
 */
export interface AvatarImageProps extends BaseComponentProps<unknown, 'img'> {}

/**
 * Defines valid state in AvatarImage component.
 */
export interface AvatarImageState {}

/**
 * Defines the methods and properties exposed by AvatarImage component.
 */
export interface AvatarImageExposes {}

/**
 * Instance of AvatarImage component.
 */
export type AvatarImageInstance = ComponentInstance<AvatarImageProps, AvatarImageState, AvatarImageExposes>;
