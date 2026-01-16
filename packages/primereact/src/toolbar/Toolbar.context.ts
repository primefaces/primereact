'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToolbarRootInstance } from '@primereact/types/shared/toolbar';

export const [ToolbarProvider, useToolbarContext] = createOptionalContext<ToolbarRootInstance>();
