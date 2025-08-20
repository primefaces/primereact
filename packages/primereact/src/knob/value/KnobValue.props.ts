import type { KnobValueProps } from '@primereact/types/shared/knob';
import { $dt } from '@primeuix/styled';

export const defaultValueProps: KnobValueProps = {
    as: 'path',
    strokeWidth: 14,
    color: $dt('knob.value.background').variable
};
