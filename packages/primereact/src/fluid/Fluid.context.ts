'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FluidInstance } from '@primereact/types/shared/fluid';

export const [FluidProvider, useFluidContext] = createOptionalContext<FluidInstance>();
