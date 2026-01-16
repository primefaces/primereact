'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { SliderRootInstance } from '@primereact/types/shared/slider';

export const [SliderProvider, useSliderContext] = createOptionalContext<SliderRootInstance>();
