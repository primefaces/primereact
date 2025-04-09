import { BaseComponentProps } from '..';
import { useAvatarProps } from './useAvatar.types';

export interface AvatarFallbackProps extends BaseComponentProps<Pick<useAvatarProps, 'delayDuration'>, 'span'> {
    readonly __TYPE?: 'AvatarFallback';
    /**
     * The label of the avatar fallback.
     */
    label?: string | undefined;
    /**
     * The icon of the avatar fallback.
     */
    icon?: string | undefined;
}
