'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { RadioButtonRootInstance } from '@primereact/types/shared/radiobutton';

export const [RadioButtonProvider, useRadioButtonContext] = createOptionalContext<RadioButtonRootInstance>();
