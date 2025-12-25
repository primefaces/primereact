import { createOptionalContext } from '@primereact/core/utils';
import type { StepperItemInstance } from '@primereact/types/shared/stepper';

export const [StepperItemProvider, useStepperItemContext] = createOptionalContext<StepperItemInstance>();
