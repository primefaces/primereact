/**
 * Defines the CSS layer type.
 */
export interface CSSLayer {
    /**
     * Defines the name of the CSS layer.
     */
    name?: string | undefined;
    /**
     * Defines the order of the CSS layers.
     */
    order?: string | undefined;
}

/**
 * Defines the Theme options type.
 */
export declare type ThemeOptions = {
    /**
     * Defines the prefix for the css variables.
     * @default 'p'
     */
    prefix?: string | undefined;
    /**
     * Defines the dark mode selector.
     * @default 'system'
     */
    darkModeSelector?: 'system' | 'none' | (string & {}) | undefined;
    /**
     * Defines whether the CSS layer should be used.
     * @default false
     */
    cssLayer?: boolean | CSSLayer | undefined;
};

/**
 * Defines the Theme props type.
 */
export declare type ThemeProps = {
    /**
     * Defines the preset.
     * @todo Define the type.
     */
    preset?: unknown | undefined;
} & ThemeOptions;
