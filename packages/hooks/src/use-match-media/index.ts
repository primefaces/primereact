import * as React from 'react';

/**
 * Listens for the specified media query.
 *
 * @param query - The media query to match.
 * @param when - A boolean indicating whether the media query should be active.
 * @returns A boolean indicating whether the media query matches.
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const isMobile = useMatchMedia('(max-width: 768px)');
 *
 *     return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
 * };
 */
export function useMatchMedia(query: string, when: boolean = true): boolean {
    const [matches, setMatches] = React.useState(false);
    const matchMedia = React.useRef<MediaQueryList | null>(null);

    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    const bind = () => matchMedia.current?.addEventListener('change', handleChange);
    const unbind = () => matchMedia.current?.removeEventListener('change', handleChange) && (matchMedia.current = null);

    React.useEffect(() => {
        if (when) {
            matchMedia.current = window.matchMedia(query);
            setMatches(matchMedia.current.matches);

            bind();
        }

        return () => {
            unbind();
        };
    }, [query, when]);

    return matches;
}
