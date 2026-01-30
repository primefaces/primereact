import * as HeadlessPositioner from '@primereact/headless/positioner';
import type { PopoverPositionerProps } from '@primereact/types/shared/popover';

export const defaultPositionerProps: PopoverPositionerProps = {
    ...HeadlessPositioner.defaultProps,
    as: 'div'
};
