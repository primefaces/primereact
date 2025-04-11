import * as HeadlessOverlayBadge from '@primereact/headless/overlaybadge';
import type { OverlayBadgeProps } from '@primereact/types/shared/overlaybadge';

export const defaultProps: OverlayBadgeProps = {
    ...HeadlessOverlayBadge.defaultProps,
    __TYPE: 'OverlayBadge',
    severity: undefined,
    size: undefined
};
