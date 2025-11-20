import { ColorPickerEyeDropperProps } from '@primereact/types/shared/colorpicker';
import * as Button from 'primereact/button';

export const defaultEyeDropperProps: ColorPickerEyeDropperProps = {
    ...(Button.defaultProps as ColorPickerEyeDropperProps),
    iconOnly: true,
    variant: 'outlined',
    severity: 'secondary'
};
