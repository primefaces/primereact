import * as React from 'react';

export const useIntersectionObserver = (ref, options = {}) => {
    const [isElementVisible, setIsElementVisible] = React.useState(false);

    React.useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsElementVisible(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [options, ref]);

    return isElementVisible;
};
