import * as HeadlessPositioner from '@primereact/headless/positioner';
import type { SelectPositionerProps } from '@primereact/types/shared/select';

export const defaultPositionerProps: SelectPositionerProps = {
    ...HeadlessPositioner.defaultProps,
    as: 'div'
};
