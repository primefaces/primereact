'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TabsRootInstance } from '@primereact/types/shared/tabs';

export const [TabsProvider, useTabsContext] = createOptionalContext<TabsRootInstance>();
