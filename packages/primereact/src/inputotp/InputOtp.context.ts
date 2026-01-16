'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputOtpRootInstance } from '@primereact/types/shared/inputotp';

export const [InputOtpProvider, useInputOtpContext] = createOptionalContext<InputOtpRootInstance>();
