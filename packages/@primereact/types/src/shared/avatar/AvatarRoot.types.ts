/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatarroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useAvatarExposes, useAvatarProps, useAvatarState } from './useAvatar.types';

/**
 * Defines passthrough(pt) options type in AvatarRoot component.
 */
export type AvatarRootPassThroughType<E> = PassThroughType<AvatarRootInstance, E>;

/**
 * Defines passthrough(pt) options of AvatarRoot component.
 */
export interface AvatarRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fallback's DOM element.
     */
    fallback?: AvatarRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: AvatarRootPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in AvatarRoot component.
 */
export interface AvatarRootProps extends BaseComponentProps<AvatarRootInstance, useAvatarProps, AvatarRootPassThrough> {
    /**
     * Defines the size of the avatar.
     * @default normal
     */
    size?: 'large' | 'normal' | 'xlarge' | undefined;
    /**
     * Defines the shape of the avatar.
     * @default square
     */
    shape?: 'circle' | 'square' | undefined;
}

/**
 * Defines valid state in Avatar component.
 * @extends useAvatarState
 */
export interface AvatarRootState extends useAvatarState {}

/**
 * Defines the methods and properties exposed by AvatarRoot component.
 * @extends useAvatarExposes
 */
export interface AvatarRootExposes extends useAvatarExposes {}

/**
 * Instance of AvatarRoot component.
 */
export type AvatarRootInstance = ComponentInstance<AvatarRootProps, AvatarRootState, AvatarRootExposes>;
