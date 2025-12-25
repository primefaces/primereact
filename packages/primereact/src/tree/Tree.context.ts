'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TreeInstance } from '@primereact/types/shared/tree';

export const [TreeProvider, useTreeContext] = createOptionalContext<TreeInstance>();
