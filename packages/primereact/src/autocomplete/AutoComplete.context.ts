'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AutoCompleteInstance } from '@primereact/types/shared/autocomplete';

export const [AutoCompleteProvider, useAutoCompleteContext] = createOptionalContext<AutoCompleteInstance>();
