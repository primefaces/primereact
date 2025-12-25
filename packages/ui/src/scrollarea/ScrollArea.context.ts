import { createOptionalContext } from '@primereact/core/utils';
import type { ScrollAreaInstance } from '@primereact/types/shared/scrollarea';

export const [ScrollAreaProvider, useScrollAreaContext] = createOptionalContext<ScrollAreaInstance>();
