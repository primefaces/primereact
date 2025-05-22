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
import type { BaseComponentProps, PassThroughType } from '..';
import type { AvatarInstance } from './Avatar.types';

/**
 * Defines passthrough(pt) options type in AvatarImage component.
 */
export type AvatarImagePassThroughType<E> = PassThroughType<AvatarImageInstance, E>;

/**
 * Defines passthrough(pt) options of AvatarImage component.
 */
export interface AvatarImagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarImagePassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in AvatarImage component.
 */
export interface AvatarImageProps extends BaseComponentProps<AvatarImageInstance, unknown, 'img'> {}

/**
 * Defines valid state in AvatarImage component.
 */
export interface AvatarImageState {}

/**
 * Defines the methods and properties exposed by AvatarImage component.
 */
export interface AvatarImageExposes {
    /**
     * The Avatar component instance.
     */
    avatar: AvatarInstance | undefined | null;
}

/**
 * Instance of AvatarImage component.
 */
export type AvatarImageInstance = ComponentInstance<AvatarImageProps, AvatarImageState, AvatarImageExposes, AvatarImagePassThrough>;
