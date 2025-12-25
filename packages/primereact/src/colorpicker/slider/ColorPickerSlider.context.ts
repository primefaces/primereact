'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ColorPickerSliderInstance } from '@primereact/types/shared/colorpicker';

export const [ColorPickerSliderProvider, useColorPickerSliderContext] = createOptionalContext<ColorPickerSliderInstance>();
