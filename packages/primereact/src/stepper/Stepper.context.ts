'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { StepperRootInstance } from '@primereact/types/shared/stepper';

export const [StepperProvider, useStepperContext] = createOptionalContext<StepperRootInstance>();
