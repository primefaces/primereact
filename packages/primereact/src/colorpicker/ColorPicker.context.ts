'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ColorPickerRootInstance } from '@primereact/types/shared/colorpicker';

export const [ColorPickerProvider, useColorPickerContext] = createOptionalContext<ColorPickerRootInstance>();
