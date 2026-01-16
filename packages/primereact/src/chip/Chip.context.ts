'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ChipRootInstance } from '@primereact/types/shared/chip';

export const [ChipProvider, useChipContext] = createOptionalContext<ChipRootInstance>();
