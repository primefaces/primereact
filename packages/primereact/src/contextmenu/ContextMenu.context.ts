'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ContextMenuRootInstance } from '@primereact/types/shared/contextmenu';

export const [ContextMenuProvider, useContextMenuContext] = createOptionalContext<ContextMenuRootInstance>();
