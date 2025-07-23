import { createOptionalContext } from '@primereact/core/utils';
import type { SliderInstance } from '@primereact/types/shared/slider';

export const [SliderProvider, useSliderContext] = createOptionalContext<SliderInstance>();
