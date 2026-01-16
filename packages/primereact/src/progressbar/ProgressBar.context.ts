'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ProgressBarRootInstance } from '@primereact/types/shared/progressbar';

export const [ProgressBarProvider, useProgressBarContext] = createOptionalContext<ProgressBarRootInstance>();
