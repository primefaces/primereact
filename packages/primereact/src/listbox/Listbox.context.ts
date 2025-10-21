import { createOptionalContext } from '@primereact/core/utils';
import type { ListboxInstance } from '@primereact/types/shared/listbox';

export const [ListboxProvider, useListboxContext] = createOptionalContext<ListboxInstance>();
