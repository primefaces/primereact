'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { IftaLabelInstance } from '@primereact/types/shared/iftalabel';

export const [IftaLabelProvider, useIftaLabelContext] = createOptionalContext<IftaLabelInstance>();
