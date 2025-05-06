import { BaseComponentProps } from '..';
import { useAvatarProps } from './useAvatar.types';

export interface AvatarProps extends BaseComponentProps<useAvatarProps, 'div'> {
    readonly __TYPE?: 'Avatar';
    /**
     * Defines the size of the avatar.
     * @defaultValue normal
     */
    size?: string | undefined;
    /**
     * Defines the shape of the avatar.
     * @defaultValue square
     */
    shape?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     * @defaultValue undefined
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @defaultValue undefined
     */
    ariaLabelledby?: string | undefined;
}
