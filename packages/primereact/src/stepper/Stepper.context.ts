'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { StepperInstance } from '@primereact/types/shared/stepper';

export const [StepperProvider, useStepperContext] = createOptionalContext<StepperInstance>();
