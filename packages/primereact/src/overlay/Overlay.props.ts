import * as HeadlessOverlay from '@primereact/headless/overlay';
import type { OverlayRootProps } from '@primereact/types/shared/overlay';

export const defaultRootProps: OverlayRootProps = {
    ...HeadlessOverlay.defaultProps,
    as: 'div'
};
