import { createOptionalContext } from '@primereact/core/utils';
import type { SpeedDialInstance } from '@primereact/types/shared/speeddial';

export const [SpeedDialProvider, useSpeedDialContext] = createOptionalContext<SpeedDialInstance>();
