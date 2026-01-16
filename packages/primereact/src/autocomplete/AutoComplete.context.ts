'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AutoCompleteRootInstance } from '@primereact/types/shared/autocomplete';

export const [AutoCompleteProvider, useAutoCompleteContext] = createOptionalContext<AutoCompleteRootInstance>();
