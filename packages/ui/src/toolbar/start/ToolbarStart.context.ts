import { createOptionalContext } from '@primereact/core/utils';
import type { ToolbarStartInstance } from '@primereact/types/shared/toolbar';

export const [ToolbarStartProvider, useToolbarStartContext] = createOptionalContext<ToolbarStartInstance>();
