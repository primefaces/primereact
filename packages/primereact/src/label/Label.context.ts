'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { LabelRootInstance } from '@primereact/types/shared/label';

export const [LabelProvider, useLabelContext] = createOptionalContext<LabelRootInstance>();
