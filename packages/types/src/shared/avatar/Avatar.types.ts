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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useAvatarExposes, useAvatarProps, useAvatarState } from './useAvatar.types';

/**
 * Defines passthrough(pt) options type in Avatar component.
 */
export type AvatarPassThroughOptionType<E> = PassThroughOptionType<AvatarInstance, E>;

/**
 * Defines passthrough(pt) options of Avatar component.
 */
export interface AvatarPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Avatar component.
 */
export interface AvatarProps extends BaseComponentProps<useAvatarProps> {
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
 * Instance of Avatar component.
 */
export type AvatarInstance = ComponentInstance<AvatarProps, AvatarState, AvatarExposes>;
