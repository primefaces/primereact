export * as ColorPicker from './UIColorPicker.parts';

// Named runtime exports to maximize tree-shaking
export {
    ColorPickerArea,
    ColorPickerAreaBackground,
    ColorPickerAreaThumb,
    ColorPickerEyeDropper,
    ColorPickerProps,
    ColorPickerProvider,
    ColorPickerSlider,
    ColorPickerSliderThumb,
    ColorPickerSliderTrack,
    ColorPickerSwatch,
    ColorPickerSwatchBackground,
    ColorPickerTransparencyGrid,
    defaultAreaBackgroundProps,
    defaultAreaProps,
    defaultAreaThumbProps,
    defaultEyeDropperProps,
    defaultInputProps,
    defaultRootProps,
    defaultSliderProps,
    defaultSliderThumbProps,
    defaultSliderTrackProps,
    defaultSwatchBackgroundProps,
    defaultSwatchProps,
    defaultTransparencyGridProps,
    useColorPickerContext
} from 'primereact/colorpicker';
export { UIColorPickerEyeDropper as EyeDropper } from './eyedropper';
export { UIColorPickerInput as Input } from './input';
export { UIColorPickerRoot as ColorPickerRoot } from './root';
