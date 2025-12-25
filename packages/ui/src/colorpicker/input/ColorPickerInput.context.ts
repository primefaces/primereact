import { createOptionalContext } from '@primereact/core/utils';
import type { ColorPickerInputInstance } from '@primereact/types/shared/colorpicker';

export const [ColorPickerInputProvider, useColorPickerInputContext] = createOptionalContext<ColorPickerInputInstance>();
