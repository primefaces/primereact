'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuInstance } from '@primereact/types/shared/menu';

export const [MenuProvider, useMenuContext] = createOptionalContext<MenuInstance>();
