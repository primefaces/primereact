'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { InputOtpInstance } from '@primereact/types/shared/inputotp';

export const [InputOtpProvider, useInputOtpContext] = createOptionalContext<InputOtpInstance>();
