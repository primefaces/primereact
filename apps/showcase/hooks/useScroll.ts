'use client';
import * as React from 'react';

type ScrollPosition = {
    x: number;
    y: number;
};

export default function useScroll(ref?: React.RefObject<HTMLElement | null>) {
    const [scroll, setScroll] = React.useState<ScrollPosition>({ x: 0, y: 0 });

    React.useEffect(() => {
        const target = ref?.current ?? window;

        let ticking = false;

        const updateScroll = () => {
            const x = target instanceof Window ? window.scrollX : target.scrollLeft;
            const y = target instanceof Window ? window.scrollY : target.scrollTop;

            setScroll({ x, y });
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        target.addEventListener('scroll', handleScroll);
        updateScroll();

        return () => {
            target.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return scroll;
}
