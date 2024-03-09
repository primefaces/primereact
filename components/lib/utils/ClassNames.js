export function classNames(...args) {
    if (args) {
        let classes = [];

        for (let i = 0; i < args.length; i++) {
            let className = args[i];

            if (!className) continue;

            const type = typeof className;

            if (type === 'string' || type === 'number') {
                classes.push(className);
            } else if (type === 'object') {
                const _classes = Array.isArray(className) ? className : Object.entries(className).map(([key, value]) => (!!value ? key : null));

                classes = _classes.length ? classes.concat(_classes.filter((c) => !!c)) : classes;
            }
        }

        return classes.join(' ').trim();
    }

    return undefined;
}
