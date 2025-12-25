'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToolbarEndInstance } from '@primereact/types/shared/toolbar';

export const [ToolbarEndProvider, useToolbarEndContext] = createOptionalContext<ToolbarEndInstance>();
