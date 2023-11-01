export interface PassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: boolean | undefined;
    classNameMergeFunction?: (arg1: string, arg2: string) => string | undefined;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: PassThroughOptions): object;
