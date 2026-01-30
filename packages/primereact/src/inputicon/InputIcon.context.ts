'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputIconInstance } from '@primereact/types/shared/inputicon';

export const [InputIconProvider, useInputIconContext] = createOptionalContext<InputIconInstance>();
