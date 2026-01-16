'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputGroupRootInstance } from '@primereact/types/shared/inputgroup';

export const [InputGroupProvider, useInputGroupContext] = createOptionalContext<InputGroupRootInstance>();
