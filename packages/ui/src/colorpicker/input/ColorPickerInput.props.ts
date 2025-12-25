import * as HeadlessColorPickerInput from '@primereact/headless/colorpicker/input';
import { ColorPickerInputProps } from '@primereact/types/shared/colorpicker';
import * as InputText from 'primereact/inputtext';

export const defaultInputProps: ColorPickerInputProps = {
    ...(InputText.defaultProps as ColorPickerInputProps),
    ...HeadlessColorPickerInput.defaultProps
};
