'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DividerRootInstance } from '@primereact/types/shared/divider';

export const [DividerProvider, useDividerContext] = createOptionalContext<DividerRootInstance>();
