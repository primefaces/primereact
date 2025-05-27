import { createOptionalContext } from '@primereact/core/utils';
import type { SwitchInstance } from '@primereact/types/shared/switch';

export const [SwitchProvider, useSwitchContext] = createOptionalContext<SwitchInstance>();
