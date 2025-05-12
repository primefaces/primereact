import * as HeadlessBadge from '@primereact/headless/badge';
import type { BadgeProps } from '@primereact/types/shared/badge';

export const defaultProps: BadgeProps = {
    ...HeadlessBadge.defaultProps,
    as: 'span',
    circle: false,
    size: undefined,
    severity: undefined
};
