'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ListboxRootInstance } from '@primereact/types/shared/listbox';

export const [ListboxProvider, useListboxContext] = createOptionalContext<ListboxRootInstance>();
