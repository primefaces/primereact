import * as HeadlessMeterGroup from '@primereact/headless/metergroup';
import type { MeterGroupProps } from '@primereact/types/shared/metergroup';

export const defaultProps: MeterGroupProps = {
    ...HeadlessMeterGroup.defaultProps,
    __TYPE: 'MeterGroup',
    orientation: 'horizontal'
};
