'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuCheckboxItemInstance } from '@primereact/types/shared/menu';

export const [MenuCheckboxItemProvider, useMenuCheckboxItemContext] = createOptionalContext<MenuCheckboxItemInstance>();
