import { createOptionalContext } from '@primereact/core/utils';
import type { RadioButtonInstance } from '@primereact/types/shared/radiobutton';

export const [RadioButtonProvider, useRadioButtonContext] = createOptionalContext<RadioButtonInstance>();
