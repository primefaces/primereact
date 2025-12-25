import * as HeadlessMeterGroup from '@primereact/headless/metergroup';
import type { MeterGroupRootProps } from '@primereact/types/shared/metergroup';

export const defaultRootProps: MeterGroupRootProps = {
    ...HeadlessMeterGroup.defaultProps,
    as: 'div',
    orientation: 'horizontal'
};
