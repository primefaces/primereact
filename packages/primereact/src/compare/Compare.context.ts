'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CompareRootInstance } from '@primereact/types/shared/compare';

export const [CompareProvider, useCompareContext] = createOptionalContext<CompareRootInstance>();
