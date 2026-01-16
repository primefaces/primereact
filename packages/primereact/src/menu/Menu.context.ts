'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuRootInstance } from '@primereact/types/shared/menu';

export const [MenuProvider, useMenuContext] = createOptionalContext<MenuRootInstance>();
