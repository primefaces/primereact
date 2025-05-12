import { createOptionalContext } from '@primereact/core/utils';
import type { ChipInstance } from '@primereact/types/shared/chip';

export const [ChipProvider, useChipContext] = createOptionalContext<ChipInstance>();
