'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TreeRootInstance } from '@primereact/types/shared/tree';

export const [TreeProvider, useTreeContext] = createOptionalContext<TreeRootInstance>();
