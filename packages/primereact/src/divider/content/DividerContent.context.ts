import { createOptionalContext } from '@primereact/core/utils';
import type { DividerContentInstance } from '@primereact/types/shared/divider';

export const [DividerContentProvider, useDividerContentContext] = createOptionalContext<DividerContentInstance>();
