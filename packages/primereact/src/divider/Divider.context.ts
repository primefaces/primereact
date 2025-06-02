import { createOptionalContext } from '@primereact/core/utils';
import type { DividerInstance } from '@primereact/types/shared/divider';

export const [DividerProvider, useDividerContext] = createOptionalContext<DividerInstance>();
