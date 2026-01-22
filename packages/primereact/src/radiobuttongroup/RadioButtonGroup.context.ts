'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { RadioButtonGroupInstance } from '@primereact/types/shared/radiobuttongroup';

export const [RadioButtonGroupProvider, useRadioButtonGroupContext] = createOptionalContext<RadioButtonGroupInstance>();
