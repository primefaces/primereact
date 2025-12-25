'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { OverlayInstance } from '@primereact/types/shared/overlay';

export const [OverlayProvider, useOverlayContext] = createOptionalContext<OverlayInstance>();
