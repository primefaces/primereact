import type { KnobRangeProps } from '@primereact/types/shared/knob';
import { $dt } from '@primeuix/styled';

export const defaultRangeProps: KnobRangeProps = {
    as: 'path',
    strokeWidth: 14,
    color: $dt('knob.range.background').variable
};
