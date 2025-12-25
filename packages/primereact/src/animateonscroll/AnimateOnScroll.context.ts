'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AnimateOnScrollInstance } from '@primereact/types/shared/animateonscroll';

export const [AnimateOnScrollProvider, useAnimateOnScrollContext] = createOptionalContext<AnimateOnScrollInstance>();
