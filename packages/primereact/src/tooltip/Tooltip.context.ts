import { createOptionalContext } from '@primereact/core/utils';
import type { TooltipInstance } from '@primereact/types/shared/tooltip';

export const [TooltipProvider, useTooltipContext] = createOptionalContext<TooltipInstance>();
