'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ButtonGroupInstance } from '@primereact/types/shared/buttongroup';

export const [ButtonGroupProvider, useButtonGroupContext] = createOptionalContext<ButtonGroupInstance>();
