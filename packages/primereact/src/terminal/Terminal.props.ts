import * as HeadlessTerminal from '@primereact/headless/terminal';
import type { TerminalProps } from '@primereact/types/shared/terminal';

export const defaultProps: TerminalProps = {
    ...HeadlessTerminal.defaultProps,
    __TYPE: 'Terminal',
    prompt: undefined
};
