'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FloatLabelInstance } from '@primereact/types/shared/floatlabel';

export const [FloatLabelProvider, useFloatLabelContext] = createOptionalContext<FloatLabelInstance>();
