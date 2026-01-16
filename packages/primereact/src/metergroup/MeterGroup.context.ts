'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MeterGroupRootInstance } from '@primereact/types/shared/metergroup';

export const [MeterGroupProvider, useMeterGroupContext] = createOptionalContext<MeterGroupRootInstance>();
