import * as HeadlessOverlay from '@primereact/headless/overlay';
import type { OverlayProps } from '@primereact/types/shared/overlay';

export const defaultProps: OverlayProps = {
    ...HeadlessOverlay.defaultProps,
    as: 'div'
};
