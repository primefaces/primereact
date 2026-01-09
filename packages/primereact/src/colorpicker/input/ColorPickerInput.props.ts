import * as HeadlessColorPickerInput from '@primereact/headless/colorpicker/input';
import { ColorPickerInputProps } from '@primereact/types/shared/colorpicker';
import { InputText, InputTextProps } from 'primereact/inputtext';

export const defaultInputProps: ColorPickerInputProps = {
    ...(InputTextProps.defaultProps as ColorPickerInputProps),
    ...HeadlessColorPickerInput.defaultProps,
    as: InputText
};
