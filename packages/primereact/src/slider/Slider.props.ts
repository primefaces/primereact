import * as HeadlessSlider from '@primereact/headless/slider';
import type { SliderProps } from '@primereact/types/shared/slider';

export const defaultProps: SliderProps = {
    ...HeadlessSlider.defaultProps,
    as: 'div',
    disabled: undefined
};
