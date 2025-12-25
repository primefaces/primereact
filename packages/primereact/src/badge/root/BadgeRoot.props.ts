import * as HeadlessBadge from '@primereact/headless/badge';
import type { BadgeRootProps } from '@primereact/types/shared/badge';

export const defaultRootProps: BadgeRootProps = {
    ...HeadlessBadge.defaultProps,
    as: 'span',
    shape: undefined,
    size: undefined,
    severity: undefined
};
