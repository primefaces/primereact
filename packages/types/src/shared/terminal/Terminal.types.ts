import { BaseComponentProps } from '..';
import { useTerminalProps } from './useTerminal.types';

/**
 * Terminal component props.
 */
export interface TerminalProps extends BaseComponentProps<useTerminalProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Terminal';
    /**
     * Prompt text for each command.
     */
    prompt?: string | undefined;
}
