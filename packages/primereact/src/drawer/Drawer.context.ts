'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DrawerInstance } from '@primereact/types/shared/drawer';

export const [DrawerProvider, useDrawerContext] = createOptionalContext<DrawerInstance>();
