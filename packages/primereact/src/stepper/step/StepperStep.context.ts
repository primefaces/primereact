'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { StepperStepInstance } from '@primereact/types/shared/stepper';

export const [StepperStepProvider, useStepperStepContext] = createOptionalContext<StepperStepInstance>();
