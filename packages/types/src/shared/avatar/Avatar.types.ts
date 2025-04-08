import { BaseComponentProps } from '..';
import { useAvatarProps } from './useAvatar.types';

export interface AvatarProps extends BaseComponentProps<useAvatarProps, 'div'> {
    readonly __TYPE?: 'Avatar';
    size?: string | undefined;
    /**
     * Defines the shape of the avatar.
     */
    shape?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
}
