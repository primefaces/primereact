import { BaseComponentProps } from '..';
import { useOverlayBadgeProps } from './useOverlayBadge.types';

export interface OverlayBadgeProps extends BaseComponentProps<useOverlayBadgeProps, 'div'> {
    readonly __TYPE?: 'OverlayBadge';
    /**
     * Severity type of the badge.
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | undefined;
    /**
     * Size of the badge, valid options are 'small', 'large', and 'xlarge'.
     */
    size?: 'small' | 'large' | 'xlarge' | undefined;
}
