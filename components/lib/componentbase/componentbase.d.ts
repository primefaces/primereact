export interface ComponentHooks {
    useMountEffect?(): void;
    useUpdateEffect?(): void;
    useUnmountEffect?(): void;
}

export declare function useHandleStyle(styles: string, isUnstyled: () => boolean, config: { name: string; styled?: boolean; hostName?: string }): void;

export interface ComponentBasePassThroughOptions {
    hooks?: ComponentHooks;
}

/**
 * @todo Update all d.ts with it.
 */
export interface ComponentBasePassThroughMethodOptions<P = any, S = any> {
    props?: P | undefined | null;
    state?: S | undefined | null;
}
