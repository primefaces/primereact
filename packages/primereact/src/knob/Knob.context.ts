'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { KnobRootInstance } from '@primereact/types/shared/knob';

export const [KnobProvider, useKnobContext] = createOptionalContext<KnobRootInstance>();
