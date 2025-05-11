import { createOptionalContext } from '@primereact/core/utils';
import type { SkeletonInstance } from '@primereact/types/shared/skeleton';

export const [SkeletonProvider, useSkeletonContext] = createOptionalContext<SkeletonInstance>();
