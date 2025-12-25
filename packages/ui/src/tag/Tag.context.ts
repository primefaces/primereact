import { createOptionalContext } from '@primereact/core/utils';
import type { TagInstance } from '@primereact/types/shared/tag';

export const [TagProvider, useTagContext] = createOptionalContext<TagInstance>();
