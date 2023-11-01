import { twMerge } from 'tailwind-merge';

export function mergeProps(props, options = {}) {
    const { useTailwind } = options;

    if (props) {
        const isFn = (o) => !!(o && o.constructor && o.call && o.apply);

        return props.reduce((merged, ps) => {
            for (const key in ps) {
                const value = ps[key];

                if (key === 'style') {
                    merged['style'] = { ...merged['style'], ...ps['style'] };
                } else if (key === 'className') {
                    let newClassname = '';

                    if (useTailwind) {
                        newClassname = twMerge(merged['className'], ps['className']);
                    } else {
                        newClassname = [merged['className'], ps['className']].join(' ').trim();
                    }

                    const isEmpty = newClassname === null || newClassname === undefined || newClassname === '';

                    merged['className'] = isEmpty ? undefined : newClassname;
                } else if (isFn(value)) {
                    const fn = merged[key];

                    merged[key] = fn
                        ? (...args) => {
                              fn(...args);
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

    return undefined;
}
