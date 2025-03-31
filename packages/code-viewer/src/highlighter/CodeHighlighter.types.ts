import type { CommonCodeProps } from '../types';

export declare type EditorTypes = 'stackblitz';

export interface CodeHighlighterProps extends Omit<CommonCodeProps, 'highlighterOptions'> {
    code?: string | undefined;
    /**
     * The options to use for the highlighter.
     */
    options?: CommonCodeProps['highlighterOptions'] | undefined;
}
