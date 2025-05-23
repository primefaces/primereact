/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useAvatarExposes, useAvatarProps, useAvatarState } from './useAvatar.types';

/**
 * Defines passthrough(pt) options type in Avatar component.
 */
export type AvatarPassThroughType<E> = PassThroughType<AvatarInstance, E>;

/**
 * Defines passthrough(pt) options of Avatar component.
 */
export interface AvatarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the fallback's DOM element.
     */
    fallback?: AvatarPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: AvatarPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in Avatar component.
 */
export interface AvatarProps extends BaseComponentProps<AvatarInstance, useAvatarProps> {
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
export interface AvatarState extends useAvatarState {}

/**
 * Defines the methods and properties exposed by Avatar component.
 * @extends useAvatarExposes
 */
export interface AvatarExposes extends useAvatarExposes {}

/**
 * Defines the CSS class names used in the Avatar component.
 */
export const AvatarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-avatar',
    /**
     * Class name of the box element
     */
    label: 'p-avatar-label',
    /**
     * Class name of the input element
     */
    icon: 'p-avatar-icon'
} as const;

/**
 * Type representing the CSS class names used in the Avatar component.
 */
export type AvatarClassNamesType = (typeof AvatarClassNames)[keyof typeof AvatarClassNames];

/**
 * Instance of Avatar component.
 */
export type AvatarInstance = ComponentInstance<AvatarProps, AvatarState, AvatarExposes, AvatarPassThrough>;
