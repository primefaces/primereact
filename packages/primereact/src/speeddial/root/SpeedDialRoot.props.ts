import * as HeadlessSpeedDial from '@primereact/headless/speeddial';
import type { SpeedDialRootProps } from '@primereact/types/shared/speeddial';

export const defaultRootProps: SpeedDialRootProps = {
    ...HeadlessSpeedDial.defaultProps,
    as: 'div',
    disabled: false,
    rotateAnimation: true
};
