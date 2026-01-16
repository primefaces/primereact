'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ScrollAreaRootInstance } from '@primereact/types/shared/scrollarea';

export const [ScrollAreaProvider, useScrollAreaContext] = createOptionalContext<ScrollAreaRootInstance>();
