import * as HeadlessSpeedDial from '@primereact/headless/speeddial';
import type { SpeedDialProps } from '@primereact/types/shared/speeddial';

export const defaultProps: SpeedDialProps = {
    ...HeadlessSpeedDial.defaultProps,
    as: 'div',
    disabled: false,
    rotateAnimation: true
};
