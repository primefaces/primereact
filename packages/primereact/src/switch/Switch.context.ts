'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { SwitchRootInstance } from '@primereact/types/shared/switch';

export const [SwitchProvider, useSwitchContext] = createOptionalContext<SwitchRootInstance>();
