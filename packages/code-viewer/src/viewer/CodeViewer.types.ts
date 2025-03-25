import type { CommonCodeProps } from '../types';

export declare type EditorTypes = 'stackblitz';

export interface CodeViewerProps extends CommonCodeProps {
    /**
     * The source code to display. Can be a string or an object with multiple sections.
     */
    source: string | Record<string, string>;
    /**
     * The order of the sections.
     */
    sectionOrder?: string[] | undefined;
    /**
     * The order of the toggleable sections.
     */
    toggleableOrder?: string[] | undefined;
    /**
     * Whether the sections can be toggled.
     */
    toggleable?: boolean | undefined;
}
