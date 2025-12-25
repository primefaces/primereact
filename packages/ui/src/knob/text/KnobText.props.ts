import type { KnobTextProps } from '@primereact/types/shared/knob';
import { $dt } from '@primeuix/styled';

export const defaultTextProps: KnobTextProps = {
    as: 'text',
    color: $dt('knob.text.color').variable
};
