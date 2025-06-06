import { createOptionalContext } from '@primereact/core/utils';
import type { ToolbarCenterInstance } from '@primereact/types/shared/toolbar';

export const [ToolbarCenterProvider, useToolbarCenterContext] = createOptionalContext<ToolbarCenterInstance>();
