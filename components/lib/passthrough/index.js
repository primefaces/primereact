/**
 * @todo: Add dynamic params support;
 *
 * Exp;
 * usePassThrough(pt1, pt2, { mergeSections: true });
 * usePassThrough(pt1, { mergeSections: true });
 */
export const usePassThrough = (pt1 = {}, pt2 = {}, { mergeSections = true, mergeProps = false, classNameMergeFunction } = {}) => {
    return {
        _usept: {
            mergeSections,
            mergeProps,
            classNameMergeFunction
        },
        originalValue: pt1,
        value: { ...pt1, ...pt2 }
    };
};
