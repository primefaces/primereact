/**
 * @todo: Add dynamic params support;
 *
 * Exp;
 * usePassThrough(pt1, pt2, { mergeSections: true });
 *
 * When useTailwind is enabled, mergeProps is overridden to true
 */
export const usePassThrough = (pt1 = {}, pt2 = {}, { mergeSections = true, mergeProps = false, useTailwind = false } = {}) => {
    return {
        _usept: {
            mergeSections,
            mergeProps: mergeProps || useTailwind,
            useTailwind
        },
        originalValue: pt1,
        value: { ...pt1, ...pt2 }
    };
};
