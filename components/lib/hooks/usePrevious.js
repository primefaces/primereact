import * as React from 'react';

export const usePrevious = (newValue) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        ref.current = newValue;

        return () => {
            ref.current = null;
        };
    }, [newValue]);

    return ref.current;
};
