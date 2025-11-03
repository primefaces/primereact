import * as HeadlessColorPickerSlider from '@primereact/headless/colorpicker/slider';
import type { ColorPickerSliderProps } from '@primereact/types/shared/colorpicker';

export const defaultSliderProps: ColorPickerSliderProps = {
    ...HeadlessColorPickerSlider.defaultProps,
    as: 'div'
};
