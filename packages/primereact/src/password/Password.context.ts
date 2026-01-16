'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PasswordRootInstance } from '@primereact/types/shared/password';

export const [PasswordProvider, usePasswordContext] = createOptionalContext<PasswordRootInstance>();
