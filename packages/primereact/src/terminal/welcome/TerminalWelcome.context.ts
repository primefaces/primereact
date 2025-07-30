import { createOptionalContext } from '@primereact/core/utils';
import type { TerminalWelcomeInstance } from '@primereact/types/shared/terminal';

export const [TerminalWelcomeProvider, useTerminalWelcomeContext] = createOptionalContext<TerminalWelcomeInstance>();
