export interface useStyleLoadOptions {
    name?: string | undefined;
    css?: string | undefined;
    element?: Element | null | undefined;
    options?: Record<string, unknown> | undefined;
}

export declare const useStyle: () => [(options: useStyleLoadOptions) => void, () => void];
