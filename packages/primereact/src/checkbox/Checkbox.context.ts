'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CheckboxRootInstance } from '@primereact/types/shared/checkbox';

export const [CheckboxProvider, useCheckboxContext] = createOptionalContext<CheckboxRootInstance>();
