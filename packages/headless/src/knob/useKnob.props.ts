import type { useKnobProps } from '@primereact/types/shared/knob';

export const defaultProps: useKnobProps = {
    defaultValue: undefined,
    value: undefined,
    size: 100,
    step: 1,
    min: 0,
    max: 100,
    readOnly: false,
    disabled: false,
    onValueChange: undefined
};
