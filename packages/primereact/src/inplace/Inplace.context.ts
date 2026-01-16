'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InplaceRootInstance } from '@primereact/types/shared/inplace';

export const [InplaceProvider, useInplaceContext] = createOptionalContext<InplaceRootInstance>();
