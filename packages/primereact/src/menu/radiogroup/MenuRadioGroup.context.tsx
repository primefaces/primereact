'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuRadioGroupInstance } from '@primereact/types/shared/menu';

export const [MenuRadioGroupProvider, useMenuRadioGroupContext] = createOptionalContext<MenuRadioGroupInstance>();
