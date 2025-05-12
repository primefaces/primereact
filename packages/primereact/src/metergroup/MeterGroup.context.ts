import { createOptionalContext } from '@primereact/core/utils';
import type { MeterGroupInstance } from '@primereact/types/shared/metergroup';

export const [MeterGroupProvider, useMeterGroupContext] = createOptionalContext<MeterGroupInstance>();
