import type { useSliderProps } from '@primereact/types/shared/slider';

export const defaultProps: useSliderProps = {
    value: undefined,
    defaultValue: undefined,
    orientation: 'horizontal',
    min: 0,
    max: 100,
    step: 1,
    minStepsBetweenThumbs: 0,
    onValueChange: undefined,
    onValueChangeEnd: undefined,
    disabled: false,
    readOnly: false
};
