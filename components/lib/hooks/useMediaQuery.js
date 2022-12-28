import { useEffect, useRef, useState } from 'react';

/**
 * Hook to notify when media queries are satisfied.
 *
 * @param {*} query the media query like '(min-width: 900px)'
 * @param {*} initialValue override the initial value if you don't want it detected
 * @returns boolean if the media query matches
 */
export function useMediaQuery(query, initialValue) {
    const [matches, setMatches] = useState(getInitialValue(query, initialValue));
    const queryRef = useRef();

    useEffect(() => {
        if ('matchMedia' in window) {
            queryRef.current = window.matchMedia(query);
            setMatches(queryRef.current.matches);

            return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
        }

        return undefined;
    }, [query]);

    return matches;
}

function attachMediaListener(query, callback) {
    query.addEventListener('change', callback);

    return () => query.removeEventListener('change', callback);
}

function getInitialValue(query, initialValue) {
    if (typeof initialValue === 'boolean') {
        return initialValue;
    }

    if (typeof window !== 'undefined' && 'matchMedia' in window) {
        return window.matchMedia(query).matches;
    }

    return false;
}
