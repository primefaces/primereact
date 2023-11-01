export interface PassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: boolean | undefined;
    useTailwind?: boolean | undefined;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: PassThroughOptions): object;
