'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CheckboxGroupInstance } from '@primereact/types/shared/checkboxgroup';

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createOptionalContext<CheckboxGroupInstance>();
