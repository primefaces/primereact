import { createOptionalContext } from '@primereact/core/utils';
import type { ColorPickerInstance } from '@primereact/types/shared/colorpicker';

export const [ColorPickerProvider, useColorPickerContext] = createOptionalContext<ColorPickerInstance>();
