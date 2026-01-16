'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DrawerRootInstance } from '@primereact/types/shared/drawer';

export const [DrawerProvider, useDrawerContext] = createOptionalContext<DrawerRootInstance>();
