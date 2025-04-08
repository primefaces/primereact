import { BaseComponentProps } from '..';
import { useBadgeProps } from './useBadge.types';

/**
 * Badge component props.
 */
export interface BadgeProps extends BaseComponentProps<useBadgeProps, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Badge';
    /**
     * Severity type of the badge.
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | undefined;
    /**
     * Size of the badge, valid options are 'small', 'large', and 'xlarge'.
     */
    size?: 'small' | 'large' | 'xlarge' | undefined;
}
