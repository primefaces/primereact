import type { GlobalComponentProps } from '@primereact/types/core';

export interface OverlayBadgeProps extends GlobalComponentProps {
    readonly __TYPE?: 'OverlayBadge';
    /**
     * Value to display inside the badge.
     */
    value?: string | number | undefined;
    /**
     * Severity type of the badge.
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | undefined;
    /**
     * Size of the badge, valid options are 'small', 'large', and 'xlarge'.
     */
    size?: 'small' | 'large' | 'xlarge' | undefined;
}
