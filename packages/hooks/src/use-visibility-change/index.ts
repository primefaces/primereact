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
    const [isVisible, setIsVisible] = React.useState(!document.hidden);

    React.useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return isVisible;
}
