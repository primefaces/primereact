import { createOptionalContext } from '@primereact/core/utils';
import type { ToolbarInstance } from '@primereact/types/shared/toolbar';

export const [ToolbarProvider, useToolbarContext] = createOptionalContext<ToolbarInstance>();
