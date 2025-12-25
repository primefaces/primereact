'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TooltipGroupInstance } from '@primereact/types/shared/tooltip';

export const [TooltipGroupProvider, useTooltipGroupContext] = createOptionalContext<TooltipGroupInstance>();
