'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuSubInstance } from '@primereact/types/shared/menu';

export const [MenuSubProvider, useMenuSubContext] = createOptionalContext<MenuSubInstance>();
