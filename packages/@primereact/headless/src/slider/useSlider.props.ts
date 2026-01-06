import type { useSliderProps } from '@primereact/types/shared/slider';

export const defaultProps: useSliderProps = {
    value: undefined,
    defaultValue: undefined,
    orientation: 'horizontal',
    min: 0,
    max: 100,
    step: undefined,
    onValueChange: undefined
};
