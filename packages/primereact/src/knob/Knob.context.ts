import { createOptionalContext } from '@primereact/core/utils';
import type { KnobInstance } from '@primereact/types/shared/knob';

export const [KnobProvider, useKnobContext] = createOptionalContext<KnobInstance>();
