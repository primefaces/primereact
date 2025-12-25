'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputNumberInstance } from '@primereact/types/shared/inputnumber';

export const [InputNumberProvider, useInputNumberContext] = createOptionalContext<InputNumberInstance>();
