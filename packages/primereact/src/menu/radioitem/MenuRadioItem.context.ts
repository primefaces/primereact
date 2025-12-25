'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuRadioItemInstance } from '@primereact/types/shared/menu';

export const [MenuRadioItemProvider, useMenuRadioItemContext] = createOptionalContext<MenuRadioItemInstance>();
