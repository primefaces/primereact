import { createOptionalContext } from '@primereact/core/utils';
import type { PasswordInstance } from '@primereact/types/shared/password';

export const [PasswordProvider, usePasswordContext] = createOptionalContext<PasswordInstance>();
