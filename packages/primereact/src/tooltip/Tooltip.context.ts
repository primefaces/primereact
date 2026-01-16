'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TooltipRootInstance } from '@primereact/types/shared/tooltip';

export const [TooltipProvider, useTooltipContext] = createOptionalContext<TooltipRootInstance>();
