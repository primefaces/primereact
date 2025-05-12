import { createOptionalContext } from '@primereact/core/utils';
import type { InplaceInstance } from '@primereact/types/shared/inplace';

export const [InplaceProvider, useInplaceContext] = createOptionalContext<InplaceInstance>();
