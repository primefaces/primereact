'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PaginatorRootInstance } from '@primereact/types/shared/paginator';

export const [PaginatorProvider, usePaginatorContext] = createOptionalContext<PaginatorRootInstance>();
