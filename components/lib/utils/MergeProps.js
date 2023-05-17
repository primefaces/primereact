export function mergeProps(...props) {
    if (props) {
        const isFn = (o) => !!(o && o.constructor && o.call && o.apply);

        return props.reduce((merged, ps) => {
            for (const key in ps) {
                if (key === 'style') {
                    merged['style'] = { ...merged['style'], ...ps['style'] };
                } else if (key === 'className') {
                    merged['className'] = [merged['className'], ps['className']].join(' ').trim();
                } else if (isFn(ps[key])) {
                    const fn = merged[key];

                    merged[key] = fn
                        ? (...args) => {
                              fn(...args);
                              value(...args);
                          }
                        : ps[key];
                } else {
                    merged[key] = ps[key];
                }
            }

            return merged;
        }, {});
    }

    return undefined;
}
