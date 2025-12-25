'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ListboxOptionInstance } from '@primereact/types/shared/listbox';

export const [ListboxOptionProvider, useListboxOptionContext] = createOptionalContext<ListboxOptionInstance>();
