'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TagRootInstance } from '@primereact/types/shared/tag';

export const [TagProvider, useTagContext] = createOptionalContext<TagRootInstance>();
