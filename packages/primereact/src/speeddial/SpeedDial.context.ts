'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { SpeedDialRootInstance } from '@primereact/types/shared/speeddial';

export const [SpeedDialProvider, useSpeedDialContext] = createOptionalContext<SpeedDialRootInstance>();
