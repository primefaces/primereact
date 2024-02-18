/**
 * Merges properties together taking an Array of props and merging into one single set of
 * properties. The options can contain a "classNameMergeFunction" which can be something
 * like Tailwind Merge for properly merging Tailwind classes.
 *
 * @param {object[]} props the array of object properties to merge
 * @param {*} options either empty or could contain a custom merge function like TailwindMerge
 * @returns the single properties value after merging
 */
export function mergeProps(props, options = {}) {
    if (!props) return undefined;

    const isFunction = (obj) => typeof obj === 'function';
    const { classNameMergeFunction } = options;
    const hasMergeFunction = isFunction(classNameMergeFunction);

    return props.reduce((merged, ps) => {
        if (!ps) return merged;

        for (const key in ps) {
            const value = ps[key];

            if (key === 'style') {
                merged['style'] = { ...merged['style'], ...ps['style'] };
            } else if (key === 'className') {
                let newClassName = '';

                if (hasMergeFunction) {
                    newClassName = classNameMergeFunction(merged['className'], ps['className']);
                } else {
                    newClassName = [merged['className'], ps['className']].join(' ').trim();
                }

                merged['className'] = newClassName || undefined;
            } else if (isFunction(value)) {
                const existingFn = merged[key];

                merged[key] = existingFn
                    ? (...args) => {
                          existingFn(...args);
                          value(...args);
                      }
                    : value;
            } else {
                merged[key] = value;
            }
        }

        return merged;
    }, {});
}
