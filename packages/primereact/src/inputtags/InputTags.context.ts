'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputTagsInstance } from '@primereact/types/shared/inputtags';

export const [InputTagsProvider, useInputTagsContext] = createOptionalContext<InputTagsInstance>();
