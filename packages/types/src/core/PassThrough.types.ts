/**
 * Defines the pass-through options.
 */
export declare type PassThroughOptions = {
    /**
     * @todo Define the type.
     * Defines whether the props should be merged.
     * @default false
     * @type {(boolean | (() => void))}
     * @example
     * ```tsx
     * ...
     * ```
     */
    mergeProps?: boolean | ((global: unknown, self: unknown, datasets?: unknown) => unknown);
    /**
     * Defines whether the sections should be merged.
     * @default true
     * @type {(boolean | (() => void) | undefined)}
     * @example
     * ```tsx
     * ...
     * ```
     */
    mergeSections?: boolean | (() => void) | undefined;
};

/**
 * Defines the pass-through props.
 */
export declare type PassThroughProps = {
    /**
     * Defines the pass-through value.
     * @todo Define the type.
     */
    value?: Record<string, unknown>;
} & PassThroughOptions;
