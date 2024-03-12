import React, { useState, useEffect } from 'react';

const useVisible = (element, rootMargin = 0.2) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: rootMargin }
        );

        if (element.current) {
            observer.observe(element.current);
        }

        return () => {
            if (observer && element.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(element.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isVisible;
};

export default useVisible;
