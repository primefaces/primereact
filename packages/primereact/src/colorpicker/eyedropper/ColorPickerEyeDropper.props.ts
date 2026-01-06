import type { ColorPickerEyeDropperProps } from '@primereact/types/shared/colorpicker';
import { ButtonProps } from 'primereact/button';

export const defaultEyeDropperProps: ColorPickerEyeDropperProps = {
    ...(ButtonProps.defaults as ColorPickerEyeDropperProps),
    iconOnly: true,
    variant: 'outlined',
    severity: 'secondary'
};
