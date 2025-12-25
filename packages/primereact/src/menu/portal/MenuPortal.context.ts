'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MenuPortalInstance } from '@primereact/types/shared/menu';

export const [MenuPortalProvider, useMenuPortalContext] = createOptionalContext<MenuPortalInstance>();
