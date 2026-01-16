'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { SelectRootInstance } from '@primereact/types/shared/select';

export const [SelectProvider, useSelectContext] = createOptionalContext<SelectRootInstance>();
