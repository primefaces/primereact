'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputTagsRootInstance } from '@primereact/types/shared/inputtags';

export const [InputTagsProvider, useInputTagsContext] = createOptionalContext<InputTagsRootInstance>();
