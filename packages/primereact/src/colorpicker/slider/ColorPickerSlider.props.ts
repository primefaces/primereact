import type { ColorPickerSliderProps } from '@primereact/types/shared/colorpicker';
import { defaultRootProps } from 'primereact/slider';

export const defaultSliderProps = {
    ...defaultRootProps,
    channel: 'hue'
} as ColorPickerSliderProps;
