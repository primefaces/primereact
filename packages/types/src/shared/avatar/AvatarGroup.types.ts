/**
 *
 * AvatarGroup is a component that displays a group of avatars, typically used to represent multiple users or items in a compact way.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatargroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in AvatarGroup component.
 */
export type AvatarGroupPassThroughType<E> = PassThroughType<AvatarGroupInstance, E>;

/**
 * Defines passthrough(pt) options of AvatarGroup component.
 */
export interface AvatarGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AvatarGroup component.
 */
export interface AvatarGroupProps extends BaseComponentProps<AvatarGroupInstance> {}

/**
 * Defines valid state in AvatarGroup component.
 */
export interface AvatarGroupState {}

/**
 * Defines the methods and properties exposed by AvatarGroup component.
 */
export interface AvatarGroupExposes {}

/**
 * Defines the CSS class names used in the Avatar component.
 */
export const AvatarGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-avatar-group'
} as const;

/**
 * Type representing the CSS class names used in the Avatar component.
 */
export type AvatarGroupClassNamesType = (typeof AvatarGroupClassNames)[keyof typeof AvatarGroupClassNames];

/**
 * Instance of AvatarGroup component.
 */
export type AvatarGroupInstance = ComponentInstance<AvatarGroupProps, AvatarGroupState, AvatarGroupExposes, AvatarGroupPassThrough>;
