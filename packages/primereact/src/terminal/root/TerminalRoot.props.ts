import * as HeadlessTerminal from '@primereact/headless/terminal';
import type { TerminalRootProps } from '@primereact/types/shared/terminal';

export const defaultRootProps: TerminalRootProps = {
    ...HeadlessTerminal.defaultProps,
    as: 'div'
};
