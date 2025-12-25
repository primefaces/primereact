'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TabsInstance } from '@primereact/types/shared/tabs';

export const [TabsProvider, useTabsContext] = createOptionalContext<TabsInstance>();
