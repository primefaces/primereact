import * as React from 'react';

/**
 * useVisibilityChange hook is used to check if the document is visible.
 *
 * @returns A boolean indicating whether the document is visible.
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const isVisible = useVisibilityChange();
 *
 *     return <div>{isVisible ? 'Visible' : 'Hidden'}</div>;
 * };
 */
export function useVisibilityChange() {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        handleVisibilityChange();

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return isVisible;
}
