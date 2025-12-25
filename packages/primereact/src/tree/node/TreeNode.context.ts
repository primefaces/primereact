'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TreeNodeInstance } from '@primereact/types/shared/tree';

export const [TreeNodeProvider, useTreeNodeContext] = createOptionalContext<TreeNodeInstance>();
