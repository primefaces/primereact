'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToggleButtonRootInstance } from '@primereact/types/shared/togglebutton';

export const [ToggleButtonProvider, useToggleButtonContext] = createOptionalContext<ToggleButtonRootInstance>();
