'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CollapsibleRootInstance } from '@primereact/types/shared/collapsible';

export const [CollapsibleProvider, useCollapsibleContext] = createOptionalContext<CollapsibleRootInstance>();
