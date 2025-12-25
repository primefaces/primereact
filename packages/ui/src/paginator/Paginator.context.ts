import { createOptionalContext } from '@primereact/core/utils';
import type { PaginatorInstance } from '@primereact/types/shared/paginator';

export const [PaginatorProvider, usePaginatorContext] = createOptionalContext<PaginatorInstance>();
