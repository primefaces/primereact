import { useEffect, useRef } from 'react';

export const usePrevious = (newValue) => {
    const ref = useRef(undefined);

    useEffect(() => {
        ref.current = newValue;
    });

    return ref.current;
}
