'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { SplitterInstance } from '@primereact/types/shared/splitter';

export const [SplitterProvider, useSplitterContext] = createOptionalContext<SplitterInstance>();
