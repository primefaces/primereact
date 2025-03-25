import type { BundledHighlighterOptions, BundledLanguage, BundledTheme, CodeToHastOptions, LanguageInput, SpecialLanguage, SpecialTheme, StringLiteralUnion, ThemeInput } from 'shiki';

export declare type EditorTypes = 'stackblitz';

export interface CommonCodeProps {
    /**
     * The language to use for highlighting.
     */
    lang?: string | undefined;
    /**
     * The theme to use for the code highlighter.
     */
    theme?: string | undefined;
    /**
     * The languages to use for highlighting.
     */
    langs?: (LanguageInput | StringLiteralUnion<BundledLanguage> | SpecialLanguage)[] | undefined;
    /**
     * The themes to use for the code highlighter.
     */
    themes?: (ThemeInput | StringLiteralUnion<BundledTheme> | SpecialTheme)[] | undefined;
    /**
     * The options to use for the highlighter.
     */
    highlighterOptions?: BundledHighlighterOptions<BundledLanguage, BundledTheme> | undefined;
    /**
     * The options to use for the code.
     */
    codeOptions?: CodeToHastOptions<BundledLanguage, BundledTheme> | undefined;
    /**
     * Whether the code can be copied.
     */
    copy?: boolean | undefined;
    /**
     * The online editors to use for generating the code.
     */
    editors?: EditorTypes[];
}
