'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToggleButtonGroupInstance } from '@primereact/types/shared/togglebuttongroup';

export const [ToggleButtonGroupProvider, useToggleButtonGroupContext] = createOptionalContext<ToggleButtonGroupInstance>();
