import { createOptionalContext } from '@primereact/core/utils';
import type { ToggleButtonInstance } from '@primereact/types/shared/togglebutton';

export const [ToggleButtonProvider, useToggleButtonContext] = createOptionalContext<ToggleButtonInstance>();
